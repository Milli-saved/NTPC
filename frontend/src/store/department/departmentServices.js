import axios from "axios";

const API_URL = "http://localhost:5001/api/v1/department";

// register department
const registerDepartment = async (departmentData) => {
  const response = await axios.post(API_URL + "", departmentData);
  return response.data;
};

// update department
const updateDepartment = async (id, departmentData) => {
  const response = await axios.put(API_URL + id, departmentData);
  return response.data;
};

// delete department
const deleteDepartment = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

// get department
const getDepartments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// get one specific department
const getOneDepartment = async (id) => {
  const response = await axios.get(id);
  return response.data;
};

const departmentServices = {
  registerDepartment,
  updateDepartment,
  deleteDepartment,
  getDepartments,
  getOneDepartment,
};

export default departmentServices;
