import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayModal: false,
  modalContent: {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    resetModal: () => ({
      displayModal: false,
      modalContent: {},
    }),
    showModal: (_, action) => ({
      displayModal: true,
      modalContent: action.payload,
    }),
  },
});

export const { resetModal, showModal } = modalSlice.actions;
export default modalSlice.reducer;
