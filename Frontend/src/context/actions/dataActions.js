import axios from "axios";

export const getData = () => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("/api/data/get-data");
      if (response.data.success === true) {
        return dispatch({
          type: "FETCH_DATA",
          payload: response.data,
        });
      } else {
         return dispatch({
          type: "FETCH_CATEGORIES_ERROR",
          payload: "Failed to fetch categories",
        });
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      dispatch({
        type: "FETCH_CATEGORIES_ERROR",
        payload: error.message,
      });
    }
  };
};