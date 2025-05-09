const initialState = {
  isLoading: false,
  isAnimating: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIMATION":
      return {};
    default:
      return state;
  }
};

export default uiReducer;
