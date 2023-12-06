import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./slices/products";
import shoppingListSliceReducer from "./slices/shoppingList";

const Store = configureStore({
  reducer: {
    products: productSliceReducer,
    shoppingList: shoppingListSliceReducer
  }
});
export default Store;
