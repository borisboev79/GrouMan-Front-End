const baseUrl = "http://localhost:3030/jsonstore/groups";

export const getAllGroups = async () => {

  const response = await fetch(baseUrl);
  const result = await response.json();
  
  const groups = Object.values(result);
  
  return groups;
};

export const add = async (groupData) => {
  const response = await fetch(`${baseUrl}/add`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(groupData)
  });

  const result = await response.json();

  return result;
}

