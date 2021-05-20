import React from 'react';
import * as S from './DashboardStyled';
import * as C from '../../components/common/CommonStyled';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';


const DashboardPage = () => {
    return (
        <>
                <S.Wrapper>
                <Header/>

                <S.SubWrapper>

            <Navbar/>
            </S.SubWrapper>

        </S.Wrapper>
        </>
    );
}

export default DashboardPage;