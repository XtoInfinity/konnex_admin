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
            <select class="ui dropdown">
                <option value="">Feedback Sentiment</option>
                <option value="1">Positive</option>
                <option value="0">Negative</option>
            </select>
            {feedbackList.map((feedback) => {
                let isPositive = feedback.data().sentiment == "positive";
                return (
                    <S.Card >
                        <div class="ui raised segment">
                            <a class={`ui ${isPositive ? 'green' : 'red'} ribbon label`}> {feedback.data().sentiment}</a>
                            <span>{feedback.data().message}</span>
                        </div>
                    </S.Card>
                )
            })}
        </S.Wrapper>
    );
}

export default FeedbackPage;