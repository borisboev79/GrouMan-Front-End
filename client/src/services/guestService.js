import * as request from "../lib/request";

const baseUrl = `${import.meta.env.VITE_API_URL}/data/guests`;

export const getAllGuests = async () => {
  try {
    const result = await request.get(baseUrl);

    return result;

  } catch (error) {
    console.error("Userlist fetching error: ", error.message);
  }
};

export const add = async (
  fullName,
  email,
  egn,
  phone,
  birthDate,
  cabin,
  groupId
) => {
  const result = await request.post(baseUrl, {
    fullName,
    email,
    egn,
    phone,
    birthDate,
    cabin,
    groupId,
  });

  return result;
};

export const getOne = async (guestId) => {
  try {
  const result = await request.get(`${baseUrl}/${guestId}`);

  return result;
  } catch(error){
    console.error("Cannot get guest because: ", error.message);
  }
};

export const edit = async (guestId, guestData) => {
  try{
  const result = await request.put(`${baseUrl}/${guestId}`, guestData);

  console.log("guest edited");

  return result;
  } catch(error){
    console.error("Guest Edit Unsuccessful Because: ", error.message);
  }
};

export const remove = async (guestId) => {
  try{
  const result = await request.remove(`${baseUrl}/${guestId}`);
  } catch(error){
    console.error("Couldn't delete guest: ", error.message);
  }
};
