import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import modalReducer from "./modalSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
const store = configureStore({
  reducer: {
    category: categoryReducer,
    modal: modalReducer,
    product: productReducer,
    cart:cartReducer,
  },
});
export default store;
