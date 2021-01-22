import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import useForm from '../hooks/useForm';
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from '../actions/authActions';
import { showErrorMessage } from '../helpers/uiMessages';
import { removeError, setError } from '../actions/uiActions';

const LoginCard = () => {
  const dispatch = useDispatch();
  const { loading, errorMessage } = useSelector(state => state.ui);

  const [values, changeHandler] = useForm({
    email: 'david@example.com',
    password: '123456',
  });

  const { email, password } = values;

  const loginHandler = e => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      dispatch(setError('Email is required'));
    } else {
      dispatch(removeError());
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const googleLoginHandler = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div className="auth__form-container">
      <h1 className="auth__title">Sign In</h1>

      <form autoComplete="off" onSubmit={loginHandler}>
        <div className="auth__form-control">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            placeholder="email@example.com"
            name="email"
            value={email}
            onChange={changeHandler}
          />

          {errorMessage &&
            errorMessage === 'Email is required' &&
            showErrorMessage(errorMessage)}
        </div>
        <div className="auth__form-control">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
        </div>

        <button
          className="btn auth__btn-submit"
          type="submit"
          disabled={loading}
        >
          Sign In
        </button>

        {/* Google Button */}
        <button
          className="btn auth__google-btn"
          type="button"
          onClick={googleLoginHandler}
        >
          <img src="/google-icon.svg" alt="Logo de Google" />
          <span>Sign In with Google</span>
        </button>
      </form>

      <Link className="auth__link" to="/auth/register">
        Create a new account
      </Link>
    </div>
  );
};

export default LoginCard;
