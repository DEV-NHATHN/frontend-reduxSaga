import { createSlice } from "@reduxjs/toolkit"

export const catSlice = createSlice({
   name: "cats",
   initialState: {
      cats: [],
      isLoading: false
   },
   reducers: {
      getCatsStart: (state, action) => {
         state.isLoading = true;
      },
      getCatsSuccess: (state, action) => {
         state.cats = action.payload;
         state.isLoading = false;
      },
      getCatsFailure: (state, action) => {
         state.isLoading = false;
      },
   }
})

export const { getCatsStart, getCatsSuccess, getCatsFailure } = catSlice.actions
export default catSlice.reducer