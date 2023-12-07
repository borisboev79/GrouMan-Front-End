import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/groups";

export const getAllGroups = async () => {
  try {
    const result = await request.get(baseUrl);

    return result;
  } catch (error) {
    console.error("Couldn't get group list: ", error.message);
  }
};

// TESTING SOMETHING HERE: -->
export const getMyGroups = async (userId) => {
  const query = new URLSearchParams({
    where: `_ownerId="${userId}"`,
    load: `owner="_ownerId:users"`,
  });

  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};

// ---> END OF TESTING

export const add = async (groupData) => {
  try {
    const result = await request.post(baseUrl, groupData);

    return result;
  } catch (error) {
    console.error("Couldn't add group: ", error.message);
  }
};

export const getOne = async (groupId) => {
  try {
    const result = await request.get(`${baseUrl}/${groupId}`);

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
