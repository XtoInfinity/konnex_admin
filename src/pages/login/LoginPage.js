import {React, useState,} from 'react';
import * as S from './LoginStyled';
import * as C from '../../components/common/CommonStyled';
import logo from '../../assets/images/logo-white.png';
import firebase from 'firebase';
import {  useHistory  } from 'react-router-dom';

const LoginPage = () => {

    let history = useHistory();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("admin").get();
        data.docs.map(doc=>{
            if(doc.data().name === name && doc.data().password === password){
                history.push('/navigation');
            }
        }, );
      };

    return (
        <S.Wrapper>
            <S.LoginWrapper>
                <S.SubWrapper>
                    <S.Image src={logo}></S.Image>
                    <S.Head>KONNEX</S.Head>
                </S.SubWrapper>
                <S.InputField placeholder="Enter your username" bottomMargin="20px"  onChange={e => setName(e.target.value)} value = {name}></S.InputField>
                <S.InputField placeholder="Enter your password" bottomMargin="20px"  onChange={e => setPassword(e.target.value)} value = {password}></S.InputField>
                <C.Button onClick = {()=>fetchData()}>Submit</C.Button>
            </S.LoginWrapper>
        </S.Wrapper>
    );
}

export default LoginPage;