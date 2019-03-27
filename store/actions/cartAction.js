import * as actionTypes from "./types";

export const addItemToCart = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});

export const checkoutCart = () => ({
  type: actionTypes.CHECKOUT
});
