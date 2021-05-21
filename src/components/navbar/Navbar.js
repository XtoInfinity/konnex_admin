import React from 'react';
import * as S from './NavbarStyled';
import { useHistory } from 'react-router-dom';

const Navbar = () => {

  let history = useHistory();


  return (
    <S.Wrapper>
      
    <S.Head>Engagements</S.Head>
    <S.SubHead onClick={() => history.push("/navigation")}>Navigation</S.SubHead>

    <S.SubHead  onClick={() => history.push("/announcement")}>Anouncements</S.SubHead>
    <S.SubHead onClick={() => history.push("/article")}>Articles</S.SubHead>
    <S.SubHead>Analytics</S.SubHead>

    <S.Head>Customer Support</S.Head>
    <S.SubHead >Messages</S.SubHead>
    <S.SubHead onClick={() => history.push("/bugReport")}>Reported Bugs</S.SubHead>
    <S.SubHead onClick={() => history.push("/feedback")}>Feedback</S.SubHead>


</S.Wrapper>
  );
}

export default Navbar;
