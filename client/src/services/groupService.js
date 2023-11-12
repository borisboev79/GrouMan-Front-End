const baseUrl = "http://localhost:3030/jsonstore/groups";

export const getAllGroups = async () => {

  const response = await fetch(baseUrl);
  const result = await response.json();
  
  const groups = Object.values(result);
  
  return groups;
};
