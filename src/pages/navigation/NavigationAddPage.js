import React, { useState, useEffect } from 'react';
import * as S from './NavigationAddStyled';
import * as C from '../../components/common/CommonStyled';
import firebase from 'firebase';
import { useHistory, useLocation } from 'react-router-dom';

const NavigationAddPage = () => {

    let history = useHistory();

    const [isLoad, setLoad] = useState(true);
    const [screens, setScreens] = useState([]);
    const [title, setTitle] = useState("");

    const [selectedScreens, setSelectedScreens] = useState([]);

    useEffect(async () => {
        const db = firebase.firestore();
        const data = await db.collection("elements").get();
        setScreens(data.docs.map(doc => doc.data()));
        setLoad(false);
    }, []);


    const submitData = async()=>{
        setLoad(true);

        const db = firebase.firestore();
        const data = await db.collection("application").doc("b9RdbkE3hCvpjyw9S2PQ").collection("navigations").add(
            {"steps":selectedScreens,"title":title}

        );
        history.push({pathname:"/navigation"},)
    }

    const instructionCards = (instruction, index, screenData, screenIndex) => {

        let instructionSet = []
        screens.map(e=>{
            if(e.screenName === screenData.uniqueRouteName){
                instructionSet = e.elements;
            }
        })
        return (
            <S.InstructionSubWrapper>
                <S.SubHead>Instruction {index + 1}</S.SubHead>

                <S.InputField placeholder="Enter description" bottomMargin="20px" onChange = {(e)=>{
                    let tempArr = [...selectedScreens];
                    tempArr[screenIndex].instructions[index].description = e.target.value;
                    setSelectedScreens(tempArr)
                }}></S.InputField>
                <S.InputField placeholder="Enter time in ms" bottomMargin="20px"onChange = {(e)=>{
                    let tempArr = [...selectedScreens];
                    tempArr[screenIndex].instructions[index].waitInMils = e.target.value;
                    setSelectedScreens(tempArr)
                }} ></S.InputField>
                <select class="ui search dropdown" value = {instruction.id} onChange = {(e)=>{
                    let tempArr = [...selectedScreens];
                    tempArr[screenIndex].instructions[index].id = e.target.value;
                    setSelectedScreens(tempArr)
                }}
>
                    <option value = "">Elements ID</option>
                    {
                        instructionSet.map((e) => <option value={e}>{e}</option>)
                    }
                </select>
            </S.InstructionSubWrapper>
        );
    }

    const dataCards = selectedScreens.map((e, index) => {
        return (
            <S.Card>
                <S.HeadWrapper>
                <S.Head>Screen {index + 1}</S.Head>
                <div class="ui toggle checkbox" value = {e.canSkip} onChange = {(e)=>{
                    let tempArr = [...selectedScreens];
                    tempArr[index].canSkip = e.target.value;
                    setSelectedScreens(tempArr)
                }}>
                    <input type="checkbox" name="public"/>
                    <label>Can Skip Screen</label>
                </div>
                </S.HeadWrapper>
                <select class="ui search dropdown" value = {e.uniqueRouteName} onChange = {(e)=>{
                    let tempArr = [...selectedScreens];
                    tempArr[index].uniqueRouteName = e.target.value;
                    setSelectedScreens(tempArr)
                }}>
                    <option value="">Screen Name</option>
                    {
                        screens.map((e) => <option value={e.screenName}>{e.screenName}</option>)
                    }
                </select>

                <S.InstructionWrapper>
                    {
                        e.instructions.map((instruction, instructionIndex) => instructionCards(instruction, instructionIndex,e, index))
                    }
                    <C.Button onClick={() => 
                    {
                        let tempArr = [...selectedScreens];
                        tempArr[index].instructions.push({});
                        setSelectedScreens(tempArr);
                    
                        }}>Add Another Instruction</C.Button>
                </S.InstructionWrapper>
            </S.Card>
        )
    }
    );

    const getComponents = () => {
        if (isLoad) {
            return (
                <>
                    <div class="ui active inline loader"></div>
                    <h4>Loading</h4>

                </>
            )
        } else {
            return (
                <>

                    {dataCards}
                    <S.Card>
                    <S.Head>Add New Screen</S.Head>
                    
                        <S.SubText>Click on the below button to a new screen</S.SubText>
                        <C.Button onClick={() => setSelectedScreens(arr => [...arr, {
                            "canSkip": true,
                            "instructions": [{}],
                            "uniqueRouteName": ""
                        }])}>Add Screen</C.Button>
                    </S.Card>
                </>
            );
        }
    }

    return (
        <S.Wrapper>
            <S.HeadCard>
            <S.Title>Add New Workflow</S.Title>
            <S.TitleField placeholder="Enter Workflow Title" bottomMargin="20px" value = {title} onChange = {(e)=>{
                    setTitle(e.target.value)
                }}/>
            </S.HeadCard>
            {getComponents()}
            <C.Button onClick = {()=>submitData()}>Add Workflow</C.Button>
        </S.Wrapper>
    );

}


export default NavigationAddPage;