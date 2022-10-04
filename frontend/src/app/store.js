import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import modalReducer from "../features/ui/modalSlice";
import sideBarReducer from "../features/ui/sideBarSlice";
import runReducer from "../features/runs/runSlice";
import rideReducer from "../features/rides/rideSlice";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    runs: runReducer,
    rides: rideReducer,
    sideBar: sideBarReducer,
  },
});
