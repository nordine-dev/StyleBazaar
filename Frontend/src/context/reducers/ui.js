const initialState = {
  isLoading: false,
  isAnimating: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIMATION":
      return {};
    case "START_LOADING":
      return {
        ...state,
        isLoading: true
      }
    case "STOP_LOADING":
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};

export default uiReducer;
