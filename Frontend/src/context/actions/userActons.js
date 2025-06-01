import axios from "axios";

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });

    try {
      const response = await axios.get("/api/auth/user");
      if (response.data.success === true) {
        dispatch({
          type: "USER_LOGIN_REQUEST",
          payload: response.data.user,
        });
      } else if (response.data.success === false) {
        dispatch({
          type: "USER_LOGIN_FAILURE",
          payload: null,
        });
      }
    } catch (error) {
      dispatch({
        type: "USER_LOGIN_FAILURE",
        payload: error
      });
    }
  };
};
