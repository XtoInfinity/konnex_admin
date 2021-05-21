import { React, useEffect, useState, } from 'react';
import * as S from './BugReportStyled';
import * as C from '../../components/common/CommonStyled';
import logo from '../../assets/images/logo-white.png';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { CalendarCheckmark } from '@styled-icons/fluentui-system-regular/CalendarCheckmark';
import { ArrowReturnRight } from '@styled-icons/bootstrap/ArrowReturnRight';

const BugReportPage = () => {

    // let history = useHistory();

    const [bugReportList, setBugReportList] = useState([]);

    const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("report").get();
        // Add the filer of applicationId on data
        data.docs.filter((element) => {
            element.data().appId = "";
        })
        setBugReportList(data.docs);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <S.Wrapper>
            {bugReportList.length != 0 ? bugReportList.map((report) => {
                let status = report.data().status;
                let labelColor = status == "Open" ? "blue" : (status == "In Progress" ? "yellow" : "green");

                return (
                    <S.Card>
                        <S.MetaDataWrapper>
                            <S.CategoryWrapper><h2>{report.data().category}</h2></S.CategoryWrapper>
                            <S.LabelWrapper>
                                <a class={`ui ${labelColor} image label`}>
                                    Status
                                    <div class="detail">{report.data().status}</div>
                                </a>
                            </S.LabelWrapper>
                        </S.MetaDataWrapper>
                        <S.MetaDataWrapper>
                            <S.CategoryWrapper>
                                <S.IconWrapper>
                                    <ArrowReturnRight></ArrowReturnRight>
                                </S.IconWrapper>
                                <h3>{report.data().subCategory}</h3>
                            </S.CategoryWrapper>
                            <S.CategoryWrapper>
                                <S.IconWrapper>
                                    <CalendarCheckmark></CalendarCheckmark>
                                </S.IconWrapper>
                                {moment(Date(report.data().createdAt)).format("DD MMM YYYY")}
                            </S.CategoryWrapper>
                        </S.MetaDataWrapper>
                        <div class="ui horizontal divider">Report</div>
                        <S.MessageWrapper>
                            <h4>{report.data().message}</h4>
                        </S.MessageWrapper>
                    </S.Card>
                )
            }) :
                <h3>No Bugs Reported</h3>}
        </S.Wrapper >
    );
}

export default BugReportPage;