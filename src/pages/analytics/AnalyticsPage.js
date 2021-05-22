import { React, useEffect, useState, } from 'react';
import * as S from './AnalyticsStyled';
import * as C from '../../components/common/CommonStyled';
import logo from '../../assets/images/logo-white.png';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';

const AnalyticsPage = () => {

    // let history = useHistory();

    const [userList, setUserList] = useState([]);
    const [bugList, setBugList] = useState([]);
    const [bugStatusMap, setBugStatusMap] = useState({});
    const [logList, setLogList] = useState([]);
    const [chartLabels, setChartLabels] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [lineChartLabels, setLineChartLabels] = useState([]);
    const [lineChartData, setLineChartData] = useState([]);
    const [pollData, setPollData] = useState([]);
    const [pollResult, setPollResult] = useState([]);
    const pollColors = ['golden yellow', 'purple', 'orange', 'teal', 'gray', 'black']

    // const userByDate()

    const bugsByStatus = () => {
        let bugMap = {};
        bugList.forEach((bug) => {
            let status = bug.data().status;
            if (!(status in bugMap))
                bugMap[status] = 0;
            bugMap[status]++;
        })
        setBugStatusMap(bugMap);
    }

    const pollStatistics = () => {
        let result = {};

        pollData.options && pollData.options.forEach((pollOption) => {
            result[pollOption.optionName] = 0;
        });

        pollData.attemptedUsers && pollData.attemptedUsers.forEach((response) => {
            result[response.answer]++;
        });

        setPollResult(result);
    }

    const applicationStatistics = () => {
        let newLogList = logList.map((log) => {
            return log.data();
        });

        // Doughnut Chart
        let labels = [];
        let data = [];
        let lineLabels = [];
        let lineData = [];
        let currentTime = moment();

        // Prefill lineLabels
        let begin = moment().subtract(24, 'hours');
        for (let i = 0; i < 24; i++) {
            lineLabels.push(`${begin.format('DD MMM HH')}:00`);
            begin = begin.add(1, 'hours');
            lineData.push(0);
        }

        newLogList.forEach((log) => {
            let index = labels.indexOf(log.screen);
            if (index == -1) {
                labels.push(log.screen);
                data.push(1);
            } else
                data[index]++;

            let timestamp = moment(log.time);
            let diff = currentTime.diff(timestamp, 'hours');
            if (diff < 24) {
                let label = `${timestamp.format('DD MMM HH')}:00`;
                let lineIndex = lineLabels.indexOf(label);
                lineData[lineIndex]++;
            }
        });
        setChartLabels(labels);
        setChartData(data);
        setLineChartLabels(lineLabels);
        setLineChartData(lineData);
    }

    const fetchData = async () => {
        const db = firebase.firestore();
        let data = await db.collection('user').get();
        setUserList(data.docs);
        data = await db.collection('report').get();
        setBugList(data.docs);
        data = await db.collection('application').doc('b9RdbkE3hCvpjyw9S2PQ').collection('logs').get()
        setLogList(data.docs);
        data = await db.collection('poll').get();
        data.forEach((poll) => {
            if (poll.data().appId == 'b9RdbkE3hCvpjyw9S2PQ') {
                setPollData(poll.data());
            }
        });
    }

    useEffect(() => {
        pollStatistics();
    }, [pollData]);

    useEffect(() => {
        bugsByStatus();
    }, [bugList]);

    useEffect(() => {
        applicationStatistics();
    }, [logList]);

    useEffect(() => {
        fetchData();
    }, []);

    const options = {
        animationEnabled: true,
        title: {
            text: "Customer Satisfaction"
        },
        subtitles: [{
            text: "71% Positive",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Unsatisfied", y: 5 },
                { name: "Very Unsatisfied", y: 31 },
                { name: "Very Satisfied", y: 40 },
                { name: "Satisfied", y: 17 },
                { name: "Neutral", y: 7 }
            ]
        }]
    }

    return (
        <S.Wrapper >
            <div class="ui segment">
                <a class="ui blue ribbon huge label"><i class="user icon"></i>Users</a>
                <div class="ui two statistics">
                    <div class="statistic">
                        <div class="value">
                            {userList.length}
                        </div>
                        <div class="label">
                            Total
                    </div>
                    </div>
                    <div class="statistic">
                        <div class="value">
                            7
                        </div>
                        <div class="label">
                            Active
                    </div>
                    </div>
                </div>
            </div>
            <div class="ui segment">
                <a class="ui red ribbon huge label"><i class="bug icon"></i>Bugs</a>
                <div class="ui four statistics">
                    <div class="statistic">
                        <div class="value">
                            {bugList.length}
                        </div>
                        <div class="label">
                            Reported
                    </div>
                    </div>
                    <div class="statistic">
                        <div class="value">
                            {bugStatusMap ? bugStatusMap['Open'] : 0}
                        </div>
                        <div class="label">
                            <button class={`ui blue label`}>
                                <div class="detail">Open</div>
                            </button>
                        </div>
                    </div>
                    <div class="statistic">
                        <div class="value">
                            {bugStatusMap ? bugStatusMap['In Progress'] : 0}
                        </div>
                        <div class="label">
                            <button class={`ui yellow label`}>
                                <div class="detail">In Progress</div>
                            </button>
                        </div>
                    </div>
                    <div class="statistic">
                        <div class="value">
                            {bugStatusMap ? bugStatusMap['Resolved'] : 0}
                        </div>
                        <div class="label">
                            <button class={`ui green label`}>
                                <div class="detail">Resolved</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui segment">
                <a class="ui green ribbon huge label"><i class="hand pointer icon"></i>Interactions</a>
                <div class="ui four statistics">
                    <div class="statistic">
                        <div class="value">
                            {logList.length}
                        </div>
                        <div class="label">
                            Count
                        </div>
                    </div>
                </div>
                <div class="ui divider"></div>
                <S.MultiChartWrapper>
                    <S.DNChartWrapper>
                        <DoughnutChart labels={chartLabels} dataArray={chartData}></DoughnutChart>
                    </S.DNChartWrapper>
                    <S.LineChartWrapper>
                        <LineChart labels={lineChartLabels} dataArray={lineChartData}></LineChart>
                    </S.LineChartWrapper>
                </S.MultiChartWrapper>

            </div>
            <div class="ui segment">
                <a class="ui black ribbon huge label"><i class="chart bar icon"></i>Poll</a>
                <h2>{pollData.title}</h2>
                <h4>{pollData.description}</h4>
                <div class="ui divider"></div>
                {pollData.options && pollData.options.map((pollOption, index) => {
                    return (
                        <div class={`ui active ${pollColors[index]} indicating progress`}>
                            <div class="bar"
                                style={{ "width": `${pollResult[pollOption.optionName] / pollData.attemptedUsers.length * 100}%` }}>
                                <S.PollValue>
                                    {pollResult[pollOption.optionName]}/{pollData.attemptedUsers.length}
                                </S.PollValue>
                            </div>
                            <div class="label">{pollOption.optionName}</div>
                        </div>)
                })}

            </div>
        </S.Wrapper >
    );
}

export default AnalyticsPage;