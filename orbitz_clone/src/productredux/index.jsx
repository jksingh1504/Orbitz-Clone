import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";
const reducers = combineReducers({
  allProducts: ProductReducer
 
});
export default reducers;