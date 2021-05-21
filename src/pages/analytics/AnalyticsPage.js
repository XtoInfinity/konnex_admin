import { React, useEffect, useState, } from 'react';
import * as S from './AnalyticsStyled';
import * as C from '../../components/common/CommonStyled';
import logo from '../../assets/images/logo-white.png';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import DoughnutChart from './DoughnutChart';

const AnalyticsPage = () => {

    // let history = useHistory();

    const [userList, setUserList] = useState([]);
    const [bugList, setBugList] = useState([]);
    const [bugStatusMap, setBugStatusMap] = useState({});
    const [logList, setLogList] = useState([]);
    const [chartLabels, setChartLabels] = useState([]);
    const [chartData, setChartData] = useState([]);

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

    const applicationStatistics = () => {
        let newLogList = logList.map((log) => {
            return log.data();
        });

        // Doughnut Chart
        let labels = [];
        let data = [];
        newLogList.forEach((log) => {
            let index = labels.indexOf(log.screen);
            if (index == -1) {
                labels.push(log.screen);
                data.push(1);
            } else
                data[index]++;
        });
        setChartLabels(labels);
        setChartData(data);

        // Line Chart

    }

    const fetchData = async () => {
        const db = firebase.firestore();
        let data = await db.collection('user').get();
        setUserList(data.docs);
        data = await db.collection('report').get();
        setBugList(data.docs);
        data = await db.collection('application').doc('b9RdbkE3hCvpjyw9S2PQ').collection('logs').get()
        setLogList(data.docs);
    }

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
                <a class="ui blue ribbon label">Users</a>
                <div class="ui four statistics">
                    <div class="statistic">
                        <div class="value">
                            <i class="user icon"></i>{userList.length}
                        </div>
                        <div class="label">
                            Total
                    </div>
                    </div>
                    <div class="statistic">
                        <div class="text value">
                            Three<br />
                            Thousand
                    </div>
                        <div class="label">
                            Signups
                    </div>
                    </div>

                    <div class="statistic">
                        <div class="value">
                            <img src="/images/avatar/small/joe.jpg" class="ui circular inline image" />
                            42
                    </div>
                        <div class="label">
                            Team Members
                    </div>
                    </div>
                </div>
            </div>
            <div class="ui segment">
                <a class="ui red ribbon label">Bugs</a>
                <div class="ui four statistics">
                    <div class="statistic">
                        <div class="value">
                            <i class="bug icon"></i>{bugList.length}
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
                <a class="ui green ribbon label">Interactions</a>
                <div class="ui four statistics">
                    <div class="statistic">
                        <div class="value">
                            <i class="hand pointer icon"></i>{logList.length}
                        </div>
                        <div class="label">
                            Count
                        </div>
                    </div>
                </div>
                <div class="ui divider"></div>
                <S.ChartWrapper>
                    <DoughnutChart labels={chartLabels} dataArray={chartData}></DoughnutChart>
                </S.ChartWrapper>
            </div>
        </S.Wrapper >
    );
}

export default AnalyticsPage;