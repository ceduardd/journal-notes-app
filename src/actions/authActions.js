import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../firebase/config';
import authTypes from '../types/authTypes';
import { noteLogout } from './notesActions';
import { uiFinishLoading, uiStartLoading } from './uiActions';

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
        });

        dispatch(login(user.uid, user.displayName));
      })
      .catch(err => {
        console.log(err);
        Swal.fire('Error', err.message);
      });
  };
};

export const startGoogleLogin = () => {
  return dispatch => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const startLoginEmailPassword = (email, password) => {
  return dispatch => {
    dispatch(uiStartLoading());

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(uiFinishLoading());
      })
      .catch(err => {
        console.log(err);
        dispatch(uiFinishLoading());
        Swal.fire('Error', err.message);
      });
  };
};

export const startLogout = () => {
  return async dispatch => {
    await firebase.auth().signOut();

    dispatch(logout());
    dispatch(noteLogout());
  };
};

export const login = (uid, name) => ({
  type: authTypes.login,
  payload: {
    uid,
    name,
  },
});

export const logout = () => ({
  type: authTypes.logout,
});
