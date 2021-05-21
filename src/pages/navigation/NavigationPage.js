import React, { useState, useEffect } from 'react';
import * as S from './NavigationStyled';
import * as C from '../../components/common/CommonStyled';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

const NavigationPage = () => {
    let history = useHistory();


    const [isLoad, setLoad] = useState(true);
    const [results, setResults] = useState([]);

    useEffect(async() => {
        const db = firebase.firestore();
        const data = await db.collection("application").doc("b9RdbkE3hCvpjyw9S2PQ").collection("navigations").get();
        setResults(data.docs.map(doc=>doc.data()));  
        setLoad(false);    
    }, []);

    const dataCards = results.map((e) => 
            {   var totalCount = 0;
                e.steps.map((step)=>totalCount+=step.instructions.length);
                return (
                    <S.Card>
                        <S.Head>{e.title}</S.Head>
                        <S.SubText>Start Screen: {e.steps[0].uniqueRouteName}</S.SubText>
                        <S.Text>Total Screens: {e.steps.length}</S.Text>
                        <S.Text>Total Instructions: {totalCount}</S.Text>
                        <C.Button onClick={() => history.push({pathname:"/navigationDetail",state: e},)}>View Details</C.Button>
                    </S.Card>
                )
            }
    );

    const getComponents = ()=>{
        if(isLoad){
            return (
                <>
                <div class="ui active inline loader"></div>
                <h4>Loading</h4>

                </>
          )
        } else{
            return (
                <S.Grid>
                    <S.AddCard>
                    <S.Head>Add New Workflow</S.Head>
                    <S.SubText>Click on the below button to create a new navigation workflow</S.SubText>
                    <C.Button>Add Workflow</C.Button>
                    </S.AddCard>
                    {dataCards}
                </S.Grid>
            );
        }
    }

    return (
        <S.Wrapper>
            {getComponents()}
        </S.Wrapper>
    );
}

export default NavigationPage;