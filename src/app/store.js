import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/cart.slice";

export default configureStore({
  reducer: CartReducer,
});
