import React from 'react';
import * as S from './LoginStyled';
import * as C from '../../components/common/CommonStyled';
import logo from '../../assets/images/logo-white.png';

const LoginPage = ()=>{
    return(
        <S.Wrapper>
    <S.LoginWrapper>
        <S.SubWrapper>
            <S.Image src = {logo}></S.Image>
            <S.Head>KONNEX</S.Head>
        </S.SubWrapper>
        <S.InputField placeholder = "Enter your username" bottomMargin = "20px"></S.InputField>
        <S.InputField placeholder = "Enter your password" bottomMargin = "20px"></S.InputField>
        <C.Button>Submit</C.Button>
    </S.LoginWrapper>
    </S.Wrapper>
    );
}

export default LoginPage;