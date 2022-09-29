import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import workoutReducer from "../features/workouts/workoutSlice";
import modalReducer from "../features/ui/modalSlice";
import runReducer from "../features/runs/runSlice";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    auth: authReducer,
    workouts: workoutReducer,
    modal: modalReducer,
    run: runReducer,
  },
});
