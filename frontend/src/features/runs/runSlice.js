/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import runService from "./runService";

const initialState = {
  runs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create Run
export const createRun = createAsyncThunk(
  "runs/create",
  async (runData, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth.user;
      return await runService.createRun(runData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getRuns = createAsyncThunk("runs/getAll", async (_, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().auth.user;
    return await runService.getRuns(token);
  } catch (error) {
    const message =
      (error.response && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const editRun = createAsyncThunk("runs/edit", async (info, thunkAPI) => {
  try {
    const { id, runData } = info;
    const { token } = thunkAPI.getState().auth.user;
    return await runService.editRun(id, runData, token);
  } catch (error) {
    const message =
      (error.response && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const deleteRun = createAsyncThunk(
  "runs/delete",
  async (id, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth.user;
      return await runService.deleteRun(id, token);
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const runSlice = createSlice({
  name: "run",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.runs.unshift(action.payload);
      })
      .addCase(createRun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getRuns.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRuns.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.runs = action.payload;
      })
      .addCase(getRuns.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editRun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editRun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = state.runs.map((run) =>
          run._id === action.payload.id ? action.payload : run
        );
      })
      .addCase(editRun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteRun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.runs = state.runs.filter((run) => run._id !== action.payload.id);
      })
      .addCase(deleteRun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = runSlice.actions;
export default runSlice.reducer;
