import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";
export type InitialState = {
  numOfIceCream: number;
};
const initialState: InitialState = {
  numOfIceCream: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      console.log("in ordered");
      state.numOfIceCream--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
