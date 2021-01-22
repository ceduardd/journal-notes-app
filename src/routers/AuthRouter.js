import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginCard from '../components/LoginCard';
import RegisterCard from '../components/RegisterCard';

const AuthRouter = () => {
  return (
    <div className="auth__container">
      <Switch>
        <Route path="/auth/login" component={LoginCard} />
        <Route path="/auth/register" component={RegisterCard} />

        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};

export default AuthRouter;
