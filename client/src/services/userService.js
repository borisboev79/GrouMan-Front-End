import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/users";

export const getAllUsers = async () => {

  const result = await request.get(baseUrl);
  
  return Object.values(result);

};

export const add = async (userData) => {
  const result = await request.post(baseUrl, userData);

  return result;
};

export const getOne = async (userId) => {
  const result = await request.get(`${baseUrl}/${userId}`, );

  return result;
}