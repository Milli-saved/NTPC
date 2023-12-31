import axios from "axios";

const API_URL = "/api/v1/members/";

// register member
const register = async (memberData) => {
  const response = await axios.post(API_URL + "register", memberData);
  if (response.data) {
    return response.data;
  }
};

const getAllMembers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// login
const login = async (memberData) => {

  const response = await axios.post(API_URL + "login", memberData);
  if (response.data) {
    localStorage.setItem("member", JSON.stringify(response.data));
  }
  return response.data;
};

// update member profile

const updateMember = async (data, token) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  let id = data.id;
  const response = await axios.put(API_URL + data.id, data);
  return response.data;
};

const getAllMembersOfChurch = async (churchName) => {
  const response = await axios.post(API_URL, churchName);
  return response.data;
};

// const updateAccess = async (memberId) => {
//   const response = await axios.post(API_URL)
// }

const logout = async () => {
  localStorage.removeItem("member");
};

const memberServices = {
  register,
  login,
  updateMember,
  logout,
  getAllMembersOfChurch,
  getAllMembers,
  // updateAccess,
};
export default memberServices;
