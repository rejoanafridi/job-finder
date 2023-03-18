import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEditJob } from "./editJobApi";

const initialState = {
	job: {},
	isLoading: false,
	isError: false,
	error: "",
};

export const fetchEdit = createAsyncThunk("job/fetchEdit", async (id) => {
	const data = await getEditJob(id);
	return data;
});

const editJobSlice = createSlice({
	name: "editJob",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchEdit.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(fetchEdit.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.job = action.payload;
			})
			.addCase(fetchEdit.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.job = {};
				state.error = action.error?.message;
			});
	},
});

export default editJobSlice.reducer;
