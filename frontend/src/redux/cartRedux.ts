import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [] as any,
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    updateProduct: (state, action) => {
      const { _id, quantity, size, color } = action.payload;
      const product = state.products.find(
        (p: any) => p._id === _id && p.color === color && p.size === size
      );
      if (product) product.quantity = quantity;
      state.total = state.products.reduce((acc: number, p: any) => acc + p.price * p.quantity, 0);
    },
    removeCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, updateProduct, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
