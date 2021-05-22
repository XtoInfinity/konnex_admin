import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import DashboardPage from './pages/dashboard/DashboardPage';
import LoginPage from './pages/login/LoginPage';
import FeedbackPage from './pages/feedback/FeedbbackPage';
import BugReportPage from './pages/bugreport/BugReportPage';
import ArticlePage from './pages/article/ArticlePage';
import AnnouncementPage from './pages/announcement/AnnouncementPage';
import NavigationDetailPage from './pages/navigation/NavigationDetailPage';
import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqeYI9R_S2uj8mALUa2nmY5K6ThIXy-Xg",
  authDomain: "konnex-d49f8.firebaseapp.com",
  projectId: "konnex-d49f8",
  storageBucket: "konnex-d49f8.appspot.com",
  messagingSenderId: "518323291682",
  appId: "1:518323291682:web:1a7faff849b4275ef36c7b",
  measurementId: "G-HHKDR719MB"
};

firebase.default.initializeApp(firebaseConfig);
export const storage = firebase.storage();


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={DashboardPage} />
          <Route exact path="/announcement" render={() => <DashboardPage data={1} />} />
          <Route exact path="/feedback" render={() => <DashboardPage data={2} />} />
          <Route exact path="/bugReport" render={() => <DashboardPage data={3} />} />
          <Route exact path="/article" render={() => <DashboardPage data={4} />} />
          <Route exact path="/navigation" render={() => <DashboardPage data={5} />} />
          <Route exact path="/navigationDetail" render={() => <DashboardPage data={6} />} />

          <Route exact path="/conversation" render={() => <DashboardPage data={7} />} />
          <Route exact path="/analytics" render={() => <DashboardPage data={8} />} />
          <Route exact path="/navigationAdd" render={() => <DashboardPage data={9} />} />

        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
