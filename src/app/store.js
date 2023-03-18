import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs/jobsSlice";
import editReducer from "../features/editJob/editJobSlice";
import filterReducer from "../features/filters/filterSlice";

export const store = configureStore({
	reducer: {
		jobs: jobsReducer,
		editJob: editReducer,
		filter: filterReducer
	},
});
