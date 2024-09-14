import axios from 'axios';

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const getService = async (route: string) => {
	try {
		const response = await axios.get(`${REACT_APP_BASE_URL}${route}`);
		return response?.data;
	} catch (error) {
		console.log(JSON.stringify(error, null, 2));
	}
};
export const postService = async (route: string, body: any) => {
	try {
		const response = await axios.post(`${REACT_APP_BASE_URL}${route}`, body);
		return response?.data;
	} catch (error) {
		console.log(JSON.stringify(error, null, 2));
	}
};

export const putService = async (route: string, body: any) => {
	try {
		const response = await axios.put(`${REACT_APP_BASE_URL}${route}`, body);
		return response?.data;
	} catch (error) {
		console.log(error);
	}
};

export const checkServer = async () => {
	return await getService(`/`);
};
export const getConsumers = async (id: String) => {
	return await getService(`/getConsumer/${id}`);
};
export const addConsumer = async (id: String, body: any) => {
	return await postService(`/addConsumer/${id}`, body);
};
export const addAllConsumers = async (body: any) => {
	console.log('i am in addAllConsumers');
	return await postService(`/addAllConsumers`, body);
};
export const fetchExcel = async (body: any) => {
	return await postService(`/fetchExcel`, body);
};
