import * as request from "../lib/request";

const baseUrl = `${import.meta.env.VITE_API_URL}/data/groups`;

export const getAllGroups = async () => {
  const query = new URLSearchParams({
    load: `owner=_ownerId:users`, 
  });

  try {
    const result = await request.get(`${baseUrl}?${query}`);

    return result;
  } catch (error) {
    console.error("Couldn't get group list: ", error.message);
  }
};

export const add = async (groupData) => {
  try {
    const result = await request.post(baseUrl, groupData);

    return result;
  } catch (error) {
    console.error("Couldn't add group: ", error.message);
  }
};

export const getOne = async (groupId) => {
  const query = new URLSearchParams({
    load: `owner=_ownerId:users`, 
  });

  try {
    const result = await request.get(`${baseUrl}/${groupId}?${query}`);

    return result;
  } catch (error) {
    console.error("Couldn't get group: ", error.message);
  }
};

export const edit = async (groupId, groupData) => {
  try {
    const result = await request.put(`${baseUrl}/${groupId}`, groupData);

    console.log("group edited");

    return result;
  } catch (error) {
    console.error("Couldn't edit group: ", error.message);
  }
};

export const remove = async (groupId) => {
  try {
    await request.remove(`${baseUrl}/${groupId}`);
  } catch (error) {
    console.error("Couldn't delete group: ", error.message);
  }
};
