import { React, useEffect, useState, } from 'react';
import * as S from './BugReportStyled';
import * as C from '../../components/common/CommonStyled';
import logo from '../../assets/images/logo-white.png';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const BugReportPage = () => {

    // let history = useHistory();

    const [bugReportList, setBugReportList] = useState([]);

    const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("report").get();
        console.log(data.docs);
        setBugReportList(data.docs);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <S.Wrapper>
            {bugReportList.map((report) => {
                let status = report.data().status;
                let labelColor = status == "Open" ? "blue" : (status == "In Progress" ? "yellow" : "green");

                return (
                    <S.Card>
                        <S.MetaDataWrapper>
                            <S.CategoryWrapper></S.CategoryWrapper>
                            <S.CategoryWrapper>Category: {report.data().category}</S.CategoryWrapper>
                            <S.LabelWrapper>
                                <a class={`ui ${labelColor} image label`}>
                                    Status
                                    <div class="detail">{report.data().status}</div>
                                </a>
                            </S.LabelWrapper>
                        </S.MetaDataWrapper>
                        <S.MetaDataWrapper>
                            <S.CategoryWrapper>{report.data().subCategory}</S.CategoryWrapper>
                            <S.CategoryWrapper>{moment(Date(report.data().createdAt)).format("DD MMM YYYY")}</S.CategoryWrapper>
                        </S.MetaDataWrapper>
                        <S.MessageWrapper>
                            {report.data().message}
                        </S.MessageWrapper>
                    </S.Card>
                )
            })}
        </S.Wrapper >
    );
}

export default BugReportPage;