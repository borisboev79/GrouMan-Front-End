import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/groups";

export const getAllGroups = async () => {

  const result = await request.get(baseUrl);
  
  return Object.values(result);

};

export const add = async (groupData) => {
  const result = await request.post(baseUrl, groupData);

  return result;
};

export const getOne = async (groupId) => {
  const result = await request.get(`${baseUrl}/${groupId}`, );

  return result;
}

