import axios from "../../utils/axios";

export const getJobs = async (type) => {
	let queryString = "";
	if (type) {
		queryString += `type_like=${type}`;
	}
	const response = await axios.get(`/jobs?${queryString}`);

	return response.data;
};

export const postJobs = async (data) => {
	const response = await axios.post(`/jobs`, data);
	return response.data;
};

export const updateJobs = async (jobId, data) => {
	const response = await axios.put(`/jobs/${jobId}`, data);
	return response.data;
};
export const deleteJob = async (id) => {
	const response = await axios.delete(`/jobs/${id}`);
	return response.data;
};
