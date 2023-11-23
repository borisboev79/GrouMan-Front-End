import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/groups";

export const getAllGroups = async () => {
  const query = new URLSearchParams({
    load: `owner=_ownerId:users`,
  });

 // const result = await request.get(`${baseUrl}?${query}`);

  const test = await request.get(baseUrl);

  console.log(test);
  
  return test;

};

export const add = async (groupData) => {
  const result = await request.post(baseUrl, groupData);

  return result;
};

export const getOne = async (groupId) => {
  const result = await request.get(`${baseUrl}/${groupId}`, );

  return result;
}

