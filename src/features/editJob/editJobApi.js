import axios from "../../utils/axios";

export const getEditJob = async (id) => {
	const response = await axios.get(`/jobs/${id}`);
	return response.data;
};
