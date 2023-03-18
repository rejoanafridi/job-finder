import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addFilter,
	addSearch,
	addSort,
} from "../../features/filters/filterSlice";

const AvailableJobs = () => {
	const dispatch = useDispatch();

	const [searchInput, setSearchInput] = useState("");
	const [sortInput, setSortInput] = useState("");
	console.log(sortInput);
	const handleSearch = (e) => {
		setSearchInput(e.target.value);
	};
	const handleSort = (e) => {
		e.preventDefault();
		setSortInput(e.target.value);
	};
	useEffect(() => {
		dispatch(addSearch(searchInput));
	}, [searchInput]);

	useEffect(() => {
		dispatch(addSort(sortInput));
	}, [sortInput]);

	return (
		<div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
			<h1 className="lws-section-title">All Available Jobs</h1>
			<div className="flex gap-4">
				<div className="search-field group flex-1">
					<i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500" />
					<input
						type="text"
						placeholder="Search Job"
						className="search-input"
						id="lws-searchJob"
						onChange={handleSearch}
						value={searchInput}
					/>
				</div>
				<select
					id="lws-sort"
					name="sort"
					autoComplete="sort"
					className="flex-1"
					onChange={handleSort}
					value={sortInput}
				>
					<option value="">Default</option>
					<option value="ascending">Salary (Low to High)</option>
					<option value="descending">Salary (High to Low)</option>
				</select>
			</div>
		</div>
	);
};

export default AvailableJobs;
