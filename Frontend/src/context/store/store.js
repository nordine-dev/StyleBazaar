import { createStore } from "redux";
import { combineReducers } from "redux";
import cartReducer from "../reducers/cart";
import uiReducer from "../reducers/ui";
import dataReducer from "../reducers/data";

const rootReducer = combineReducers({
  cart: cartReducer,
  ui: uiReducer,
  data: dataReducer
});

const store = createStore(rootReducer);

export default store;
