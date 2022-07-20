
import { ProductActiontype } from "./ProductActiontype";
export const setProducts = (products) => {
  return {
    type: ProductActiontype.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ProductActiontype.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    types:ProductActiontype.REMOVE_SELECTED_PRODUCT,
  };
};