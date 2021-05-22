import React from 'react';
import * as S from './HeaderStyled';
import Logo from '../../assets/images/logo.png';
import color from '../../config/color';
import * as C from '../common/CommonStyled';
import {LogoutCircleR} from '@styled-icons/remix-line/LogoutCircleR';
import { useHistory } from 'react-router';

const Header = ()=>{

    let history = useHistory();


    return (
        <S.Wrapper>
            <S.SubWrapper>
                <S.Image src = {Logo} height = '50px'/>
                <C.LineHead>KONNEX</C.LineHead>
            </S.SubWrapper>
            <S.Divider/>
            <S.SubWrapper>
                <S.Text fontSize = '1.4rem' color = {color.brownShade1}>Admin Dashboard</S.Text>
            </S.SubWrapper>
            <S.Divider/>
            <S.SubWrapper>
                <S.RightWrapper alignEnd>
                    <S.Text fontSize = '1.4rem' color = {color.primary}>Welcome</S.Text>
                    <S.Text fontSize = '1.1rem' color = 'black' >DEEPAK NAYAK</S.Text>

                </S.RightWrapper>
                <S.RightWrapper marginLeft>
                    <LogoutCircleR height = '35px' onClick={() => history.push({pathname:"/"},)}/>
                    <S.Text fontSize = '0.9rem' color = {color.brownShade1}>LOG OUT</S.Text>

                </S.RightWrapper>
            </S.SubWrapper>
        </S.Wrapper>
    );
}

export default Header;