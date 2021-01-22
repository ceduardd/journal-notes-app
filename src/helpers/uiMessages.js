export const showErrorMessage = errorMessage => (
  <span className="auth__error-msg">
    <i className="fas fa-exclamation-triangle"></i>
    {errorMessage}
  </span>
);
