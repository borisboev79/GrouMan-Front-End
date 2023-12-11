import * as request from "../lib/request";

const baseUrl = `${import.meta.env.VITE_API_URL}/jsonstore/users`;
const realBaseUrl = `${import.meta.env.VITE_API_URL}/data/users`;

export const getAllUsers = async () => {
  try{
  const result = await request.get(baseUrl);

  return Object.values(result);
} catch(error) {
  console.error("User list fetch failed because ", error.message);
}
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
  try {
    const result = await request.get(`${baseUrl}/${userId}`);

    return result;
  } catch (error) {
    console.error("User fetch failed because ", error.message);
  }
};

export const edit = async (userId, userData) => {
  try {
    const result = await request.put(`${baseUrl}/${userId}`, userData);

    console.log("user edited");

    return result;
  } catch (error) {
    console.error("Edit user failed because ", error.message);
  }
};

export const remove = async (userId) => {
  try {
    const result = await request.remove(`${baseUrl}/${userId}`);
  } catch (error) {
    console.error("Delete user failed because ", error.message);
  }
};

export const del = async (userId) => {
  try {
    const result = await request.remove(`${realBaseUrl}/${userId}`);
  } catch (error) {
    console.error("Delete user failed because ", error.message);
  }
};
