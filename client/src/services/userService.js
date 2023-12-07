import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/users";
const realBaseUrl = "http://localhost:3030/data/users";

export const getAllUsers = async () => {
  const result = await request.get(baseUrl);

  return Object.values(result);
};

export const add = async (
  firstName,
  lastName,
  email,
  username,
  password,
  office
) => {
  const resultLocal = await request.post(baseUrl, {
    firstName,
    lastName,
    email,
    username,
    password,
    office,
  });

  return resultLocal;
};

export const getOne = async (userId) => {
  const result = await request.get(`${baseUrl}/${userId}`);

  return result;
};

export const edit = async (userId, userData) => {
  try {
    const result = await request.put(`${baseUrl}/${userId}`, userData);

    console.log("user edited");

    return result;
  } catch {
    (error) => console.error("Edit user failed because ", error.message);
  }
};

export const remove = async (userId) => {
  const result = await request.remove(`${baseUrl}/${userId}`);
};

export const del = async (userId) => {
  try {
    const result = await request.remove(`${realBaseUrl}/${userId}`);
  } catch {
    (error) => console.error("Delete user failed because ", error.message);
  }
};
