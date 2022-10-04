import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import Header from './components/Header';
import LoadSpinner from './components/LoadSpinner';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  }, [isAuthenticated]);
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setAuthenticated(false)}
            signedIn={isAuthenticated}></Header>
          <Suspense fallback={<LoadSpinner />}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy onSignIn={() => setAuthenticated(true)}></AuthLazy>
              </Route>
              <Route path='/dashboard'>
                {!isAuthenticated && <Redirect to='/'></Redirect>}
                <DashboardLazy></DashboardLazy>
              </Route>
              <Route path='/' component={MarketingLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
