import axios from "axios";

const API_URL = "/api/v1/program";

// register Program
const registerProgram = async (programData) => {
  const response = await axios.post(API_URL + "", programData);
  return response.data;
};

// update Program
const updateProgram = async (id, programData) => {
  const response = await axios.put(API_URL + id, programData);
  return response.data;
};

// delete Program
const deleteProgram = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

// get Program
const getPrograms = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// get one specific Program
const getOneProgram = async (id) => {
  const response = await axios.get(id);
  return response.data;
};

// attendance
const attendedMembers = async (data) => {
  const response = await axios.post(API_URL + "/attendance", data);
  return response.data;
};

const programServices = {
  registerProgram,
  updateProgram,
  deleteProgram,
  getPrograms,
  getOneProgram,
  attendedMembers,
};

export default programServices;
