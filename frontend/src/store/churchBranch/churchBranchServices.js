import axios from "axios";

const API_URL = "http://localhost:5001/api/v1/branch/";

// register church branch
const registerChurchBranch = async (churchBranchData) => {
  const response = await axios.post(API_URL + "addnewbranch", churchBranchData);
  return response.data;
};

// update church branch
const updateChurchBranch = async (id, churchBranchData) => {
  const response = await axios.put(API_URL + id, churchBranchData);
  return response.data;
};

// delete church branch
const deleteChurchBranch = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

// get church branch
const getChurchBranchs = async () => {
  const response = await axios.get(API_URL + "getallbranches");
  return response.data;
};

// get one specific church branch
const getOneChurchBranch = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

const churchBranchServices = {
  registerChurchBranch,
  updateChurchBranch,
  deleteChurchBranch,
  getChurchBranchs,
  getOneChurchBranch,
};

export default churchBranchServices;
