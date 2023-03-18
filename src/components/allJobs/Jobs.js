import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchJobs } from "../../features/jobs/jobsSlice";
import Job from "./Job";

const Jobs = () => {
	const dispatch = useDispatch();
	const { jobs, isLoading, isError } = useSelector((state) => state.jobs);

	const { search, sorts } = useSelector((state) => state.filter);
	// sort order by selected type
	let sortOrder = (jobs) => {
		if (sorts === "descending") {
			let data = [...jobs];
			let res = data?.sort((a, b) => b.salary - a.salary);
			return res;
		} else if (sorts === "ascending") {
			let data = [...jobs];
			let res = data?.sort((a, b) => a.salary - b.salary);
			return res;
		} else {
			return jobs;
		}
	};

	useEffect(() => {
		dispatch(fetchJobs());
	}, [dispatch]);
	let content = null;
	if (isLoading) content = <p>Loading...</p>;
	if (!isLoading && isError) content = <p>There was an error!!</p>;
	if (!isError && !isLoading && jobs.length === 0)
		content = <p>No jobs data found !! </p>;
	if (!isError && !isLoading && jobs.length > 0) {
		content = sortOrder(jobs)
			.filter((data) => {
				return data.title.toLowerCase().includes(search.toLowerCase());
			})
			?.map((job) => <Job key={job.id} job={job} />);
	}

	return <>{content}</>;
};

export default Jobs;
