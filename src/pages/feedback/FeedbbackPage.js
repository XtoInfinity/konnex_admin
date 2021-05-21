import { React, useEffect, useState, } from 'react';
import * as S from './FeedbackStyled';
import * as C from '../../components/common/CommonStyled';
import logo from '../../assets/images/logo-white.png';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

const FeedbackPage = () => {

    // let history = useHistory();

    const [feedbackList, setFeedbackList] = useState([]);
    const [originalFeedbackList, setOriginalFeedbackList] = useState([]);

    const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("feedback").get();
        setFeedbackList(data.docs);
        setOriginalFeedbackList(data.docs);
    };

    const filterFeedback = (value) => {
        if (value == "") {
            setFeedbackList(originalFeedbackList);
            return;
        }
        let filteredFeedbackList = originalFeedbackList.filter((feedback) => {
            return (feedback.data().sentiment == value);
        })
        setFeedbackList(filteredFeedbackList);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <S.Wrapper>
            <select class="ui dropdown" onChange={({ target: { value } }) => filterFeedback(value)}>
                <option value="">Feedback Sentiment</option>
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
            </select>
            <S.FeedbackWrapper>
                {feedbackList.map((feedback) => {
                    let isPositive = feedback.data().sentiment == "positive";
                    return (
                        <div class="ui raised segment">
                            <a class={`ui ${isPositive ? 'green' : 'red'} ribbon label`}> {feedback.data().sentiment}</a>
                            <h4>{feedback.data().message}</h4>
                        </div>
                    )
                })}
            </S.FeedbackWrapper>
        </S.Wrapper>
    );
}

export default FeedbackPage;