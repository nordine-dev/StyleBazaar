import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import cartReducer from "../reducers/cart";
import uiReducer from "../reducers/ui";
import dataReducer from "../reducers/data";
import {thunk}  from "redux-thunk";
import { userReducer } from "../reducers/user";

const rootReducer = combineReducers({
  cart: cartReducer,
  ui: uiReducer,
  data: dataReducer,
  user: userReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
