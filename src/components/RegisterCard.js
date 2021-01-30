import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import useForm from '../hooks/useForm';
import { startRegisterWithEmailPasswordName } from '../actions/authActions';
import { removeError, setError } from '../actions/uiActions';
import { showErrorMessage } from '../helpers/uiMessages';

const RegisterCard = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector(state => state.ui);

  const [values, changeHandler] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = values;

  const registerHandler = e => {
    e.preventDefault();

    if (isValidForm()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isValidForm = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password.length < 5) {
      dispatch(setError('Password must be at least 6 characters'));
      return false;
    } else if (password !== password2) {
      dispatch(setError('Passwords do not match'));
      return false;
    }

    dispatch(removeError());

    return true;
  };

  return (
    <div className="auth__form-container animate__animated animate__fadeInUp animate__faster">
      <h1 className="auth__title">Sign Up</h1>

      <form autoComplete="off" onSubmit={registerHandler}>
        <div className="auth__form-control">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Jhon Doe"
            value={name}
            onChange={changeHandler}
          />

          {errorMessage &&
            errorMessage === 'Name is required' &&
            showErrorMessage(errorMessage)}
        </div>
        <div className="auth__form-control">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="email@example.com"
            value={email}
            onChange={changeHandler}
          />

          {errorMessage &&
            errorMessage === 'Email is not valid' &&
            showErrorMessage(errorMessage)}
        </div>
        <div className="auth__form-control">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter a password"
            value={password}
            onChange={changeHandler}
          />

          {errorMessage &&
            errorMessage === 'Password must be at least 6 characters' &&
            showErrorMessage(errorMessage)}
        </div>
        <div className="auth__form-control">
          <label htmlFor="password2">Confirm password:</label>
          <input
            id="password2"
            type="password"
            name="password2"
            placeholder="Confirm password"
            value={password2}
            onChange={changeHandler}
          />

          {errorMessage &&
            errorMessage === 'Passwords do not match' &&
            showErrorMessage(errorMessage)}
        </div>

        <button
          className="btn auth__btn-submit"
          style={{ marginBottom: '20px' }}
          type="submit"
        >
          Sign Up
        </button>
      </form>

      <Link className="auth__link" to="/auth/login">
        Already registered?
      </Link>
    </div>
  );
};

export default RegisterCard;
