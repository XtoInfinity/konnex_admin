import React from 'react';
import * as S from './DashboardStyled';
import * as C from '../../components/common/CommonStyled';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Feedback from '../feedback/FeedbbackPage';
import BugReportPage from '../bugreport/BugReportPage';
import ArticlePage from '../article/ArticlePage';
import AnnouncementPage from '../announcement/AnnouncementPage';
import ConversationPage from '../conversation/ConversationPage';

const DashboardPage = (props) => {

    const getPage = () => {
        const value = props.data;
        if (value === 1) {
            return AnnouncementPage();
        } else if (value === 2) {
            return Feedback();

        } else if (value === 3) {
            return BugReportPage();

        } else if (value === 4) {
            return ArticlePage();

        } else if (value == 5) {
            return ConversationPage();
        }
    }

    return (
        <>
            <S.Wrapper>
                <Header />

                <S.SubWrapper>

                    <Navbar />
                    {getPage()}
                </S.SubWrapper>

            </S.Wrapper>
        </>
    );
}

export default DashboardPage;