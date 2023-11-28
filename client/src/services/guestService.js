import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/guests";

export const getAllGuests = async () => {

  // const query = new URLSearchParams({
  //   where: `groupId="${groupId}"`,
  //   load: `owner=_ownerId:users`,
  // })

  const query = new URLSearchParams({
    where: `groupId="${groupId}"`,
    load: `owner=_ownerId:users`,
  })

  console.log(`${baseUrl}?${query}`)

  const result = await request.get(`${baseUrl}?${query}`);

  return result;

};

export const add = async (fullName, email, egn, phone, birthDate, cabin, groupId) => {
  const result = await request.post(baseUrl, {
    fullName, email, egn, phone, birthDate, cabin, groupId,
  });

  return result;
};

export const getOne = async (guestId) => {
  const result = await request.get(`${baseUrl}/${guestId}`, );
 

  return result;
}

export const remove = async (guestId) => {
  const result = await request.remove(`${baseUrl}/${guestId}`, );
}
