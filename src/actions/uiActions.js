import uiTypes from '../types/uiTypes';

export const setError = errorMessage => ({
  type: uiTypes.setError,
  payload: errorMessage,
});

export const removeError = () => ({
  type: uiTypes.removeError,
});

export const uiStartLoading = () => ({
  type: uiTypes.uiStartLoading,
});

export const uiFinishLoading = () => ({
  type: uiTypes.uiFinishLoading,
});
