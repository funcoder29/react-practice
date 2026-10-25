const createSlice = require("@reduxjs/toolkit").createSlice;
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

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
