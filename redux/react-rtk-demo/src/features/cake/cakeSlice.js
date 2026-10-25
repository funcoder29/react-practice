import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
    restocked: (state, action) => {
      console.log("In restocked");
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
