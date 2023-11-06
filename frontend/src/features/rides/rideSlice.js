import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import rideService from "./rideService";

const initialState = {
	rides: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// Create Ride
export const createRide = createAsyncThunk(
	"rides/create",
	async (rideData, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth.user;
			return await rideService.createRide(rideData, token);
		} catch (error) {
			const message =
				(error.response && error.response.data) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const getRides = createAsyncThunk(
	"rides/getAll",
	async (_, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth.user;
			return await rideService.getRides(token);
		} catch (error) {
			const message =
				(error.response && error.response.data) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const editRide = createAsyncThunk(
	"rides/edit",
	async (rideData, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth.user;
			return await rideService.editRide(rideData.id, rideData, token);
		} catch (error) {
			const message =
				(error.response && error.response.data) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const deleteRide = createAsyncThunk(
	"rides/delete",
	async (id, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth.user;
			return await rideService.deleteRide(id, token);
		} catch (error) {
			const message =
				(error.response && error.response.data) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const rideSlice = createSlice({
	name: "rides",
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
			.addCase(createRide.pending, (state) => ({
				...state,
				isLoading: true,
			}))
			.addCase(createRide.fulfilled, (state, action) => ({
				...state,
				isLoading: false,
				isSuccess: true,
				rides: [action.payload, ...state.rides],
			}))
			.addCase(createRide.rejected, (state, action) => ({
				...state,
				isLoading: false,
				isError: true,
				message: action.payload,
			}))
			.addCase(getRides.pending, (state) => ({
				...state,
				isLoading: true,
			}))
			.addCase(getRides.fulfilled, (state, action) => ({
				...state,
				isLoading: false,
				isSuccess: true,
				rides: action.payload,
			}))
			.addCase(getRides.rejected, (state, action) => ({
				...state,
				isLoading: false,
				isError: true,
				message: action.payload,
			}))
			.addCase(editRide.pending, (state) => ({
				...state,
				isLoading: true,
			}))
			.addCase(editRide.fulfilled, (state, action) => ({
				...state,
				isLoading: false,
				isSuccess: true,
				rides: state.rides.map((ride) =>
					ride._id === action.payload._id ? action.payload : ride,
				),
			}))
			.addCase(editRide.rejected, (state, action) => ({
				...state,
				isLoading: false,
				isError: true,
				message: action.payload,
			}))
			.addCase(deleteRide.pending, (state) => ({
				...state,
				isLoading: true,
			}))
			.addCase(deleteRide.fulfilled, (state, action) => ({
				...state,
				isLoading: false,
				isSuccess: true,
				rides: state.rides.filter((ride) => ride._id !== action.payload.id),
			}))
			.addCase(deleteRide.rejected, (state, action) => ({
				...state,
				isLoading: false,
				isError: true,
				message: action.payload,
			}));
	},
});

export const { reset } = rideSlice.actions;
export default rideSlice.reducer;
