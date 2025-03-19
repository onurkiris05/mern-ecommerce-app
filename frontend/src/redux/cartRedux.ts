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
      const { _id, quantity, size, color } = action.payload;

      const existingProduct = state.products.find(
        (p: any) => p._id === _id && p.color === color && p.size === size
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
      }

      state.total = state.products.reduce((acc: number, p: any) => acc + p.price * p.quantity, 0);
    },
    updateProduct: (state, action) => {
      const { _id, quantity, size, color } = action.payload;

      const product = state.products.find(
        (p: any) => p._id === _id && p.color === color && p.size === size
      );

      if (product) product.quantity = quantity;
      state.total = state.products.reduce((acc: number, p: any) => acc + p.price * p.quantity, 0);
    },
    deleteProduct: (state, action) => {
      const { _id, size, color } = action.payload;

      const product = state.products.find(
        (p: any) => p._id === _id && p.color === color && p.size === size
      );

      if (!product) return;
      state.products.splice(state.products.indexOf(product), 1);
      state.quantity -= 1;
      state.total = state.products.reduce((acc: number, p: any) => acc + p.price * p.quantity, 0);
    },
    removeCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, updateProduct, removeCart, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
