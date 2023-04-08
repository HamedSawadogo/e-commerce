import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "cart",
  initialState: {
    cart: window.localStorage.getItem("cart")
      ? JSON.parse(window.localStorage.cart)
      : [],
  },
  reducers: {
    deleteCart: (state, { payload }) => {
      const newCart = state.cart.filter((cart) => cart.id != payload);
      state.cart = newCart;
      window.localStorage.cart = JSON.stringify(newCart);
    },
    emptyCart: (state) => {
      state.cart = [];
      window.localStorage.cart = JSON.stringify(state.cart);
    },
    addCart: (state, { payload }) => {
      let article = state.cart.filter((article) => article.id == payload.id);
      if (article.length > 0) {
        state.cart = state.cart.map((cart) => {
          if (cart.id == payload.id) {
            return {
              ...cart,
              quantity: payload.quantity,
            };
          } else {
            return cart;
          }
        });
      } else {
        state.cart.push(payload);
      }
      window.localStorage.cart = JSON.stringify(state.cart);
    },
  },
});

export default CardSlice.reducer;
export const { addCart, deleteCart, emptyCart } = CardSlice.actions;
