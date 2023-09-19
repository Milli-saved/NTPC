import axios from "axios";

const API_URL = "/api/v1/church";

// register church
const registerChurch = async (churchData) => {
  const response = await axios.post(API_URL, churchData);
  return response.data;
};

// update church
const updateChurch = async (id, churchData) => {
  const response = await axios.put(API_URL + id, churchData);
  return response.data;
};

// delete church
const deleteChurch = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

// get church
const getChurch = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// get one specific church
const getOneChurch = async (id) => {
  const response = await axios.get(id);
  return response.data;
};

const churchServices = {
  registerChurch,
  updateChurch,
  deleteChurch,
  getChurch,
  getOneChurch,
};

export default churchServices;
