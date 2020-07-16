import axios from "axios";
import cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/contant";

const addToCart = (productId, qty) => async (dispatch,getState) => {
  try {
    const { data } = await axios.get("/api/products/" + productId);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
// retrieve previos item in cart  by saving it into cookie 
    const { cart : { cartItems }} = getState();
    cookie.set("cartItems",JSON.stringify(cartItems))
  } catch (error) {}
};

const removeFromCart = (productId) => async (dispatch,getState ) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: productId,
  });
  const { cart : { cartItems }} = getState();
  cookie.set("cartItems",JSON.stringify(cartItems))
};
export { addToCart, removeFromCart };
