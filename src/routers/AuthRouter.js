import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthRouter = () => {
  return (
    <div className="auth__container">
      <div className="auth__box">
        <Switch>
          <Route path="/auth/login" component={LoginScreen} />
          <Route path="/auth/register" component={RegisterScreen} />

          <Redirect to="auth/login" />
        </Switch>
      </div>
    </div>
  );
};

export default AuthRouter;
