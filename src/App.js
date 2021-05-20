import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import DashboardPage from './pages/dashboard/DashboardPage';
import LoginPage from './pages/login/LoginPage';
import * as firebase from 'firebase';

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


function App() {
  return (
    <>
                  <GlobalStyle />
                  <BrowserRouter>
                <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/home" component={DashboardPage} />

                  </Switch>
                  </BrowserRouter>

    </>
  );
}

export default App;
