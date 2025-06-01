const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case "USER_LOGIN_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
