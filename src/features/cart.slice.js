import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
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
    },
  },
});

export default CardSlice.reducer;
export const { addCart } = CardSlice.actions;
