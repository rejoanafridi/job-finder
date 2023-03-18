const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	type: "",
	search: "",
	sorts: "",
};
const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		addFilter: (state, action) => {
			state[action.payload.filterType] =
				action.payload[action.payload.filterType];
		},
		removeFilter: (state, action) => {
			state[action.payload.filterType] = "";
		},

		removeFilters: (state) => {
			state.type = "";
			state.sorts = "";
			state.search = "";
		},
		addSearch: (state, action) => {
			state.search = action.payload;
		},
		addSort: (state, action) => {
			state.sorts = action.payload;
		},
	},
});

export default filterSlice.reducer;
export const { addFilter, removeFilter, removeFilters, addSearch, addSort } =
	filterSlice.actions;
