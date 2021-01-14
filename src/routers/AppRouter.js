import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import JournalScreen from '../screens/JournalScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/" component={JournalScreen} exact />

          <Redirect to="auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
