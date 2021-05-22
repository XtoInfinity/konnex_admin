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
import AnalyticsPage from '../analytics/AnalyticsPage';
import NavigationPage from '../navigation/NavigationPage';
import NavigationDetailPage from '../navigation/NavigationDetailPage';
import NavigationAddPage from '../navigation/NavigationAddPage';

const DashboardPage = (props) => {

    const getPage = () => {
        const value = props.data;
        switch (value) {
            case 1: return (<AnnouncementPage></AnnouncementPage >);
            case 2: return (<Feedback></Feedback>);
            case 3: return (<BugReportPage></BugReportPage>);
            case 4: return (<ArticlePage></ArticlePage>);
            case 5: return (<NavigationPage></NavigationPage>);
            case 6: return (<NavigationDetailPage></NavigationDetailPage>);
            case 7: return (<ConversationPage></ConversationPage>);
            case 8: return (<AnalyticsPage></AnalyticsPage>);
            case 9: return (<NavigationAddPage></NavigationAddPage>);

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