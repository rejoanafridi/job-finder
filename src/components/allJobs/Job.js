import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchJobs, removeJob } from "../../features/jobs/jobsSlice";
const Job = ({ job }) => {
	const dispatch = useDispatch();
	const { title, type, salary, deadline, id, isLoading } = job;
	const navigate = useNavigate();
	const getColor = (type) => {
		if (type === "Full Time") {
			return "#FF8A00";
		} else if (type === "Internship") {
			return "#FF5757";
		} else {
			return "#56E5C4";
		}
	};
	const handleDelete = () => {
		dispatch(removeJob(id));
	};

	return (
		<div className="lws-single-job">
			<div className="flex-1 min-w-0">
				<h2 className="lws-title">{title}</h2>
				<div className="job-footers">
					<div className="lws-type">
						{/* Fulltime - #FF8A00,  */}
						{/* Internship - #FF5757,  */}
						{/* Remote - #56E5C4,  */}
						<i
							className={`fa-solid fa-stop !text-[${getColor(
								type
							)}] text-lg mr-1.5`}
						/>
						{type}
					</div>

					<div className="lws-salary">
						<i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5" />
						BDT {salary}
					</div>
					<div className="lws-deadline">
						<i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5" />
						Closing on {deadline}
					</div>
				</div>
			</div>
			<div className="mt-5 flex lg:mt-0 lg:ml-4">
				<span className="hidden sm:block">
					<Link to={`/edit-job/${id}`}>
						<button
							type="button"
							className="lws-edit btn btn-primary"
							// onClick={handleEdit}
						>
							<i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2" />
							Edit
						</button>
					</Link>
				</span>
				<span className="sm:ml-3">
					<button
						type="button"
						className="lws-delete btn btn-danger "
						onClick={() => handleDelete()}
					>
						<i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2" />
						Delete
					</button>
				</span>
			</div>
		</div>
	);
};

export default Job;
