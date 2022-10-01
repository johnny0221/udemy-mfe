import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import SignIn from './components/Signin';
import SignUp from './components/Signup';
import Landing from './components/landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/auth/signin'>
              <SignIn onSignIn={onSignIn}></SignIn>
            </Route>
            <Route path='/auth/signup'>
              <SignUp onSignIn={onSignIn}></SignUp>
            </Route>
            <Route path='/' component={Landing}></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
