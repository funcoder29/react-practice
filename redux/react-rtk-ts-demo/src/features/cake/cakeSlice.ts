import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type InitialState = { numOfCakes: number };
const initialState: InitialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake", //name of the action we defined in redux
  initialState,
  reducers: {
    ordered: (state) => {
      //state transitions
      console.log("In ordered ");
      state.numOfCakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      console.log("In restocked");
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
