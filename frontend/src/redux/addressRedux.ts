import { createSlice } from "@reduxjs/toolkit";

export interface AddressInput {
  email: string;
  name: string;
  address: string;
  zip: string;
  city: string;
  country: string;
}

const addressSlice = createSlice({
  name: "address",
  initialState: {
    orderAddress: null as AddressInput | null,
  },
  reducers: {
    setAddress: (state, action) => {
      state.orderAddress = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;
export default addressSlice.reducer;
