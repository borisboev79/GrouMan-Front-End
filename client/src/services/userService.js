import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/users";

export const getAllUsers = async () => {

  const result = await request.get(baseUrl);

  return Object.values(result);

};

export const add = async (firstName, lastName, email, username, password, office) => {
  const resultLocal = await request.post(baseUrl, {
    firstName, lastName, email, username, password, office,
  });

  return resultLocal;
};

export const getOne = async (userId) => {
  const result = await request.get(`${baseUrl}/${userId}`, );
 

  return result;
}

export const remove = async (userId) => {
  const result = await request.remove(`${baseUrl}/${userId}`, );
}
