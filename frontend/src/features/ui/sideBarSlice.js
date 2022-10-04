/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checked: false,
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    setChecked: (state, action) => ({
      checked: action.payload,
    }),
  },
});

export const { setChecked } = sideBarSlice.actions;
export default sideBarSlice.reducer;
