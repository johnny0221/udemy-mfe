import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LoadSpinner from './components/LoadSpinner';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <BrowserRouter>
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
              <Route path='/' component={MarketingLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
