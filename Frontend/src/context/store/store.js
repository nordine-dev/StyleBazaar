import { createStore } from "redux";
import { combineReducers } from "redux";
import cartReducer from "../reducers/cart";
import uiReducer from "../reducers/ui";

const rootReducer = combineReducers({
  cart: cartReducer,
  ui: uiReducer,
});

const store = createStore(rootReducer);

export default store;
