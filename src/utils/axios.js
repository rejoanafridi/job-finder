import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://job-finder-btzo.onrender.com/",
});

export default axiosInstance;
