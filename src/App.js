import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import DashboardPage from './pages/dashboard/DashboardPage';
import LoginPage from './pages/login/LoginPage';



function App() {
  return (
    <>
                  <GlobalStyle />
                  <BrowserRouter>
                <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/" component={DashboardPage} />

                  </Switch>
                  </BrowserRouter>

    </>
  );
}

export default App;
