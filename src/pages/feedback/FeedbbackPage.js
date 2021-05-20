import { React, useEffect, useState, } from 'react';
import * as S from './FeedbackStyled';
import * as C from '../../components/common/CommonStyled';
import logo from '../../assets/images/logo-white.png';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

const FeedbackPage = () => {

    // let history = useHistory();

    const [feedbackList, setFeedbackList] = useState([]);

    const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("feedback").get();
        setFeedbackList(data.docs);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <S.Wrapper>
            {feedbackList.map((feedback) => {
                return (
                    <S.Card>
                        <S.MetaDataWrapper>
                            <S.UserWrapper>{feedback.data().userId}</S.UserWrapper>
                            <S.SentimentWrapper isPositive={feedback.data().sentiment == "positive"}>{feedback.data().sentiment}</S.SentimentWrapper>
                        </S.MetaDataWrapper>
                        <S.MessageWrapper>
                            {feedback.data().message}
                        </S.MessageWrapper>
                    </S.Card>
                )
            })}
        </S.Wrapper>
    );
}

export default FeedbackPage;