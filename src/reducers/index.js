import { combineReducers } from "redux";
import CategoryReducer from "./categoryReducer";
import ProductReducer from "./productReducer";

export default function reducer() {
  const rootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
  });

  return rootReducer;
}
