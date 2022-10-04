import axios from "axios";

const API_URL = "/api/rides/";

const createRide = async (rideData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, rideData, config);

  return response.data;
};

const getRides = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const editRide = async (rideId, rideData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + rideId, rideData, config);

  return response.data;
};

const deleteRide = async (rideId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + rideId, config);

  return response.data;
};

const rideService = {
  createRide,
  getRides,
  editRide,
  deleteRide,
};

export default rideService;
