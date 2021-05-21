import React from 'react';
import * as S from './NavbarStyled';
import { useHistory } from 'react-router-dom';

const Navbar = (props) => {

  let history = useHistory();

  const pushScreen = (val)=>{
    history.replace(val);
  }

  return (
    <S.Wrapper>
      
    <S.Head>Engagements</S.Head>
    <S.SubHead onClick={() => pushScreen("/navigation")}>Navigation</S.SubHead>

    <S.SubHead  onClick={() => pushScreen("/announcement")}>Anouncements</S.SubHead>
    <S.SubHead onClick={() => pushScreen("/article")}>Articles</S.SubHead>
    <S.SubHead>Analytics</S.SubHead>

    <S.Head>Customer Support</S.Head>
    <S.SubHead >Messages</S.SubHead>
    <S.SubHead onClick={() => pushScreen("/bugReport")}>Reported Bugs</S.SubHead>
    <S.SubHead onClick={() => pushScreen("/feedback")}>Feedback</S.SubHead>


</S.Wrapper>
  );
}

export default Navbar;
