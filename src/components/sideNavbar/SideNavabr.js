import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
	addFilter,
	removeFilter,
	removeFilters,
} from "../../features/filters/filterSlice";
import { fetchJobs } from "../../features/jobs/jobsSlice";

const SideNavabr = () => {
	const { type } = useSelector((state) => state.filter);
	console.log(type);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(addFilter({ type: e.target.innerText, filterType: "type" }));
		navigate("/");
	};

	const showAllJob = (e) => {
		e.preventDefault();
		dispatch(removeFilters());
		navigate("/");
	};
	useEffect(() => {
		dispatch(fetchJobs(type));
	}, [dispatch, type]);
	return (
		<div className="sidebar">
			<nav>
				<ul className="space-y-4">
					<li>
						<Link
							to="/"
							className="main-menu menu-active"
							id="lws-alljobs-menu"
							onClick={showAllJob}
						>
							<i className="fa-solid fa-briefcase" />
							<span> All Available Jobs</span>
						</Link>
						<ul className="space-y-6 lg:space-y-2 ">
							<li>
								<a
									className="sub-menu"
									href="/jobs/internship"
									id="lws-internship-menu"
									onClick={handleClick}
								>
									<i className="fa-solid fa-stop !text-[#FF5757]" />
									Internship
								</a>
							</li>
							<li>
								<a
									className="sub-menu"
									href="/jobs/fulltime"
									id="lws-fulltime-menu"
									onClick={handleClick}
								>
									<i className="fa-solid fa-stop !text-[#FF8A00]" />
									Full Time
								</a>
							</li>
							<li>
								<a
									className="sub-menu"
									href="/jobs/remote"
									id="lws-remote-menu"
									onClick={handleClick}
								>
									<i className="fa-solid fa-stop !text-[#56E5C4]" />
									Remote
								</a>
							</li>
						</ul>
					</li>
					<li>
						<Link to="/add-new-job" className="main-menu" id="lws-addJob-menu">
							<i className="fa-solid fa-file-circle-plus" />
							<span>Add NewJob</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SideNavabr;
