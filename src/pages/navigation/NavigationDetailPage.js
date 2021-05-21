import React, { useState, useEffect } from 'react';
import * as S from './NavigationDetailStyled';
import * as C from '../../components/common/CommonStyled';
import firebase from 'firebase';
import { useLocation } from 'react-router-dom';

const NavigationDetailPage = (props) => {

    const location = useLocation();
    const data = location.state;
    
    const getInstruction = (instruction, index)=>{
        return (
            <S.InstructionSubWrapper>
                <S.SubHead>
                        Instruction {index+1}
                        </S.SubHead>
                <S.ItemName>
                    Element ID: {instruction.id}
                </S.ItemName>
                <S.ItemName>
                    Description: {instruction.description}
                </S.ItemName>
                <S.ItemName>
                    Wait time: {instruction.waitInMils}ms
                </S.ItemName>
            </S.InstructionSubWrapper>

        );
    }

    return (
        <S.Wrapper>
            <S.Head>
                            {data.title}
                        </S.Head>
            {data.steps.map((step, index)=>{
                return (
                    <S.Card>
                        
                        <S.HeadWrapper>
                        <S.ScreenName>
                        Screen {index+1}: {step.uniqueRouteName}
                        </S.ScreenName>

                        {step.canSkip}
                        </S.HeadWrapper>
                        
                        <S.InstructionWrapper>

                        {step.instructions.map((instruction, index)=>getInstruction(instruction, index))} 
                        </S.InstructionWrapper>

                    </S.Card>
                )
            })}            
        </S.Wrapper>
    );
}

export default NavigationDetailPage;