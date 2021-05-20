import React from 'react';
import * as S from './NavbarStyled';

const Navbar = () => {
  return (
    <S.Wrapper>
      
    <S.Head>Engagements</S.Head>
    <S.SubHead >Navigation</S.SubHead>

    <S.SubHead>Anouncements</S.SubHead>
    <S.SubHead>Articles</S.SubHead>
    <S.SubHead>Analytics</S.SubHead>

    <S.Head>Customer Support</S.Head>
    <S.SubHead >Messages</S.SubHead>
    <S.SubHead>Reported Bugs</S.SubHead>
    <S.SubHead>Feedback</S.SubHead>


</S.Wrapper>
  );
}

export default Navbar;
