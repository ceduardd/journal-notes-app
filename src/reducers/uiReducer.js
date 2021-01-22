import uiTypes from '../types/uiTypes';

const intialState = {
  loading: false,
  errorMessage: null,
};

export const uiReducer = (state = intialState, action) => {
  switch (action.type) {
    case uiTypes.setError:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case uiTypes.removeError:
      return {
        ...state,
        errorMessage: null,
      };

    case uiTypes.uiStartLoading:
      return {
        ...state,
        loading: true,
      };

    case uiTypes.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
