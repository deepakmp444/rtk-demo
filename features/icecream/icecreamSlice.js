const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIce: 20,
};

const icecreamSlice = createSlice({
  name: "iceicream",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIce--;
    },
    restocked: (state, action) => {
      state.numOfIce += action.payload;
    },
  },
  // first way of using extra reducer
  extraReducers:{
    ['cake/ordered']: (state) =>{
      state.numOfIce--;
    },
  }
});

module.exports = icecreamSlice.reducer;
module.exports.iceActions = icecreamSlice.actions;
