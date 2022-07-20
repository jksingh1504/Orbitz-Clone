import { ProductActiontype } from "./ProductActiontype";
const intialState = {
  products: [],
};

export const ProductReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ProductActiontype.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ProductActiontype.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ProductActiontype.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};