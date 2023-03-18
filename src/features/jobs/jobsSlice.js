import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { deleteJob, getJobs, postJobs, updateJobs } from "./jobsApi";

// initial State
const initialState = {
	isLoading: false,
	isError: false,
	error: "",
	jobs: [],
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (type) => {
	const jobs = await getJobs(type);
	return jobs;
});

export const createJobs = createAsyncThunk("jobs/createJobs", async (data) => {
	const create = await postJobs(data);
	return create;
});

export const editJobs = createAsyncThunk(
	"jobs/editJobs",
	async ({ jobId, data }) => {
		const edit = await updateJobs(jobId, data);
		return edit;
	}
);

export const removeJob = createAsyncThunk("jobs/delete", async (id) => {
	const remove = await deleteJob(id);
	return remove;
});

const jobsSlice = createSlice({
	name: "jobs",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchJobs.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(fetchJobs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.jobs = action.payload;
			})

			.addCase(fetchJobs.rejected, (state, action) => {
				state.isLoading = false;
				state.jobs = [];
				state.isError = true;
				state.error = action.error?.message;
			})
			.addCase(createJobs.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(createJobs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.jobs.push(action.payload);
			})

			.addCase(createJobs.rejected, (state, action) => {
				state.isLoading = false;

				state.isError = true;
				state.error = action.error?.message;
			})
			.addCase(editJobs.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(editJobs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				const indexToUpdate = state.jobs.findIndex(
					(t) => t.id === action.payload
				);
				state.jobs[indexToUpdate] = action.payload;
			})

			.addCase(editJobs.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error?.message;
			})
			.addCase(removeJob.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(removeJob.fulfilled, (state, action) => {
				state.isLoading = false;
				state.jobs = state.jobs.filter((jobs) => jobs?.id !== action.meta.arg);
				state.isError = false;
			})

			.addCase(removeJob.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error?.message;
			});
	},
});

export default jobsSlice.reducer;
