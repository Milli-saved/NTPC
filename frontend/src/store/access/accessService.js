import axios from "axios";

const API_URL = "/api/v1/members/access/";

// register access
const registerAccess = async (accessData) => {
  const response = await axios.post(API_URL + "", accessData);
  return response.data;
};

// update access
const updateAccess = async (accessData) => {
  const response = await axios.put(API_URL + accessData.member, accessData);
  return response.data;
};

// delete access
const deleteAccess = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

// get one specific access
const getOneAccess = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

const accessServices = {
  registerAccess,
  updateAccess,
  deleteAccess,
  getOneAccess,
};

export default accessServices;
