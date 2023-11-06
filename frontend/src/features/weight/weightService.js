import axios from "axios";

const API_URL = "/api/weights/";

const createWeight = async (weightData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.post(API_URL, weightData, config);

	return response.data;
};

const getWeights = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(API_URL, config);

	return response.data;
};

const editWeight = async (weightId, weightData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.put(API_URL + weightId, weightData, config);

	return response.data;
};

const deleteWeight = async (weightId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.delete(API_URL + weightId, config);

	return response.data;
};

const weightService = {
	createWeight,
	getWeights,
	editWeight,
	deleteWeight,
};

export default weightService;
