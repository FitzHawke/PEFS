import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import weightService from "./weightService";

const initialState = {
	weights: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// Create Weight
export const createWeight = createAsyncThunk(
	"weights/create",
	async (weightData, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth.user;
			return await weightService.createWeight(weightData, token);
		} catch (error) {
			const message =
				(error.response && error.response.data) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const getWeights = createAsyncThunk(
	"weights/getAll",
	async (_, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth.user;
			return await weightService.getWeights(token);
		} catch (error) {
			const message =
				(error.response && error.response.data) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const editWeight = createAsyncThunk(
	"weights/edit",
	async (weightData, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth.user;
			return await weightService.editWeight(weightData.id, weightData, token);
		} catch (error) {
			const message =
				(error.response && error.response.data) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const deleteWeight = createAsyncThunk(
	"weights/delete",
	async (id, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth.user;
			return await weightService.deleteWeight(id, token);
		} catch (error) {
			const message =
				(error.response && error.response.data) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const weightSlice = createSlice({
	name: "weights",
	initialState,
	reducers: {
		reset: (state) => ({
			...state,
			isError: false,
			isSuccess: false,
			isLoading: false,
			message: "",
		}),
	},
	extraReducers: (builder) => {
		builder
			.addCase(createWeight.pending, (state) => ({
				...state,
				isLoading: true,
			}))
			.addCase(createWeight.fulfilled, (state, action) => ({
				...state,
				isLoading: false,
				isSuccess: true,
				weights: [action.payload, ...state.weights],
			}))
			.addCase(createWeight.rejected, (state, action) => ({
				...state,
				isLoading: false,
				isError: true,
				message: action.payload,
			}))
			.addCase(getWeights.pending, (state) => ({
				...state,
				isLoading: true,
			}))
			.addCase(getWeights.fulfilled, (state, action) => ({
				...state,
				isLoading: false,
				isSuccess: true,
				weights: action.payload,
			}))
			.addCase(getWeights.rejected, (state, action) => ({
				...state,
				isLoading: false,
				isError: true,
				message: action.payload,
			}))
			.addCase(editWeight.pending, (state) => ({
				...state,
				isLoading: true,
			}))
			.addCase(editWeight.fulfilled, (state, action) => ({
				...state,
				isLoading: false,
				isSuccess: true,
				weights: state.weights.map((weight) =>
					weight._id === action.payload._id ? action.payload : weight,
				),
			}))
			.addCase(editWeight.rejected, (state, action) => ({
				...state,
				isLoading: false,
				isError: true,
				message: action.payload,
			}))
			.addCase(deleteWeight.pending, (state) => ({
				...state,
				isLoading: true,
			}))
			.addCase(deleteWeight.fulfilled, (state, action) => ({
				...state,
				isLoading: false,
				isSuccess: true,
				weights: state.weights.filter(
					(weight) => weight._id !== action.payload.id,
				),
			}))
			.addCase(deleteWeight.rejected, (state, action) => ({
				...state,
				isLoading: false,
				isError: true,
				message: action.payload,
			}));
	},
});

export const { reset } = weightSlice.actions;
export default weightSlice.reducer;
