
const initialState = {

  error: null,
  isLoading: false,
  categories:[],
  products: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_DATA":
      return {
        ...state,
        categories :action.payload.categories,
        products: action.payload.products,
        isLoading: false,
      };
    case "FETCH_CATEGORIES_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
