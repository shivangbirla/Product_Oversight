import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getProducts = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  return API.get(`/api/v1/get/products`, config);
};

export const findUser = (id) => {
  // get token  from local storage
  const token = localStorage.getItem("skilloptoken");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    withCredentials: true,
  };
  return API.get(`/api/user/profile/${id}`, config);
};

export const registerUser = (data) =>
  API.post(`/api/user/register`, data, { withCredentials: true });

export const loginUser = (data) =>
  API.post(`/api/user/login`, data, { withCredentials: true });

export const updateIsMentor = (data) => {
  // get token  from local storage
  const token = localStorage.getItem("skilloptoken");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    withCredentials: true,
  };
  return API.put(`/api/user/update/profile`, data, config);
};

export const getAllUsers = (data) => {
  // get token  from local storage
  const token = localStorage.getItem("skilloptoken");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    withCredentials: true,
  };
  return API.get(`/api/user/profile/all`, config);
};
export const getfilteredUser = (data) => {
  // get token  from local storage
  const token = localStorage.getItem("skilloptoken");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    withCredentials: true,
  };
  return API.post(`/api/user/profile/search`, data, config);
};

export const getSpecificUser = (id) => {
  // get token  from local storage
  const token = localStorage.getItem("skilloptoken");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    withCredentials: true,
  };
  return API.get(`/api/user/profile/${id}`, config);
};
