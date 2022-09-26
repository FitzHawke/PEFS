import axios from 'axios';

const API_URL = '/api/runs/';

const createRun = async (runData, token) => {
    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, runData, config);

    return response.data;
};

const getRuns = async (token) => {
    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config);

    return response.data;
};

const deleteRun = async (runId, token) => {
    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + runId, config);

    return response.data;
};

const runService = {
    createRun,
    getRuns,
    deleteRun,
};

export default runService;