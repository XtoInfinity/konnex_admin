import React from 'react';
import * as S from './NavbarStyled';
import { useHistory } from 'react-router-dom';

const Navbar = (props) => {

  let history = useHistory();

  const pushScreen = (val) => {
    history.replace(val);
  }

  return (
    <S.Wrapper>

      <S.Head>Engagements</S.Head>
      <S.SubHead onClick={() => pushScreen("/navigation")}>Navigation</S.SubHead>
      <S.SubHead onClick={() => history.push("/announcement")}>Anouncements</S.SubHead>
      <S.SubHead onClick={() => history.push("/article")}>Articles</S.SubHead>
      <S.SubHead onClick={() => history.push("/analytics")}>Analytics</S.SubHead>

      <S.Head>Customer Support</S.Head>
      <S.SubHead onClick={() => history.push("/conversation")}>Messages</S.SubHead>
      <S.SubHead onClick={() => history.push("/bugReport")}>Reported Bugs</S.SubHead>
      <S.SubHead onClick={() => history.push("/feedback")}>Feedback</S.SubHead>


    </S.Wrapper>
  );
}

export default Navbar;
