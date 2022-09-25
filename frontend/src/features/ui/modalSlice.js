import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayModal: false,
  modalContent: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    resetModal: (state) => {
      state.displayModal = false;
      state.modalContent = {};
    },
    showModal: (state, action) => {
      state.displayModal = true;
      state.modalContent = action.payload;
    },
  },
});

export const { resetModal, showModal } = modalSlice.actions;
export default modalSlice.reducer;
