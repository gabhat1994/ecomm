import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducer/productListReducer";
import  cookie  from "js-cookie";
import { cartReducer } from "./reducer/cartReducer";
import thunk from "redux-thunk";

const cartItems = cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
