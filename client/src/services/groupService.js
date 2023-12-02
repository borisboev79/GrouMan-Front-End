import { useContext } from "react";
import * as request from "../lib/request";
import AuthContext from "../contexts/authContext";

const baseUrl = "http://localhost:3030/data/groups";

export const getAllGroups = async () => {

  const result = await request.get(baseUrl);
  
  return result;

};

export const getMyGroups = async (userId) => {
  const query = new URLSearchParams({
    where: `_ownerId="${userId}"`,
    load: `owner="_ownerId:users"`,
  });

  const result = await request.get(`${baseUrl}?${query}`);

  const test = await request.get(baseUrl);

  console.log(`${baseUrl}?${query}`);
  
  return result;

};

export const add = async (groupData) => {
  const result = await request.post(baseUrl, groupData);

  return result;
};

export const getOne = async (groupId) => {
  const result = await request.get(`${baseUrl}/${groupId}`, );

  return result;
}

export const remove = async (groupId) => {
  await request.remove(`${baseUrl}/${groupId}`, );
}
