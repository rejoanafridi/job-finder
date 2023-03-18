import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editJobs } from "../../features/jobs/jobsSlice";
import { fetchEdit } from "../../features/editJob/editJobSlice";

const EditJob = () => {
	const dispatch = useDispatch();
	const { job, isLoading, isError, error } = useSelector(
		(state) => state.editJob
	);
	console.log(job.id);
	const { title, salary: sal, type: ty, deadline: dd } = job || {};
	// state for form handler
	// const [role, setRole] = useState("");
	// const [type, setType] = useState("");
	// const [salary, setSalary] = useState("");
	// const [deadline, setDeadline] = useState("");

	const [formData, setFormData] = useState({
		title: "",
		type: "",
		salary: "",
		deadline: "",
	});

	console.log(formData);

	const { jobId } = useParams();

	const navigate = useNavigate();

	const handleEditJob = (event) => {
		event.preventDefault();

		navigate("/");
	};

	const handleEditBtn = (e) => {
		dispatch(editJobs({ jobId, data: formData }));
	};
	// handle change form
	const handleChange = (e) => {
		e.preventDefault();
		const key = e.target.name.replace("lwsJob", "");
		const keys = key.toLowerCase();
		setFormData({ ...formData, [keys]: e.target.value });
	};

	useEffect(() => {
		dispatch(fetchEdit(jobId));
	}, [jobId]);

	useEffect(() => {
		if (job?.id && !isLoading && jobId) {
			setFormData({
				title: job.title,
				type: job.type,
				salary: job.salary,
				deadline: job.deadline,
			});
		}
	}, [job, isLoading, jobId]);

	// what to do

	let content = null;
	if (isLoading) content = <p>Loading...</p>;
	if (!isLoading && isError) content = <p>There was an error loading</p>;
	if (!isError && !isLoading && !job?.id) content = <p>No Job data Found !</p>;
	if (!isError && !isLoading && job?.id) {
		content = (
			<main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
				<h1 className="mb-10 text-center lws-section-title">Edit Job</h1>
				<div className="max-w-3xl mx-auto">
					<form className="space-y-6" onSubmit={handleEditJob}>
						<div className="fieldContainer">
							<label
								htmlFor="lws-JobTitle"
								className="text-sm font-medium text-slate-300"
							>
								Job Title
							</label>
							<select
								id="lws-JobTitle"
								name="lwsJobTitle"
								required
								onChange={handleChange}
								value={formData.title}
							>
								<option hidden="" selected="">
									Select Job
								</option>
								<option>Software Engineer</option>
								<option>Software Developer</option>
								<option>Full Stack Developer</option>
								<option>MERN Stack Developer</option>
								<option>DevOps Engineer</option>
								<option>QA Engineer</option>
								<option>Product Manager</option>
								<option>Social Media Manager</option>
								<option>Senior Executive</option>
								<option>Junior Executive</option>
								<option>Android App Developer</option>
								<option>IOS App Developer</option>
								<option>Frontend Developer</option>
								<option>Frontend Engineer</option>
							</select>
						</div>
						<div className="fieldContainer">
							<label htmlFor="lws-JobType">Job Type</label>
							<select
								id="lws-JobType"
								name="lwsJobType"
								required
								onChange={handleChange}
								value={formData.type}
							>
								<option value="" hidden="" selected="">
									Select Job Type
								</option>
								<option>Full Time</option>
								<option>Internship</option>
								<option>Remote</option>
							</select>
						</div>
						<div className="fieldContainer">
							<label htmlFor="lws-JobSalary">Salary</label>
							<div className="flex border rounded-md shadow-sm border-slate-600">
								<span className="input-tag">BDT</span>
								<input
									type="number"
									name="lwsJobSalary"
									id="lws-JobSalary"
									required
									className="!rounded-l-none !border-0"
									placeholder="20,00,000"
									onChange={handleChange}
									value={formData.salary}
								/>
							</div>
						</div>
						<div className="fieldContainer">
							<label htmlFor="lws-JobDeadline">Deadline</label>
							<input
								type="date"
								name="lwsJobDeadline"
								id="lws-JobDeadline"
								required
								onChange={handleChange}
								value={formData.deadline}
							/>
						</div>
						<div className="text-right">
							<button
								type="submit"
								id="lws-submit"
								className="cursor-pointer btn btn-primary w-fit"
								onClick={(e) => handleEditBtn(e)}
							>
								Edit
							</button>
						</div>
					</form>
				</div>
			</main>
		);
	}

	return <div className="lg:pl-[14rem] mt-[5.8125rem]">{content}</div>;
};

export default EditJob;
