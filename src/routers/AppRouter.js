import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/config';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import JournalScreen from '../screens/JournalScreen';
import AuthRouter from './AuthRouter';
import { login } from '../actions/authActions';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import LoaderScreen from '../screens/LoaderScreen';
import { startLoadNotes } from '../actions/notesActions';

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));

        setIsLoggedIn(true);

        dispatch(startLoadNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <LoaderScreen />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            exact
            path="/"
            component={JournalScreen}
            isLoggedIn={isLoggedIn}
          />

          <Redirect to="auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
