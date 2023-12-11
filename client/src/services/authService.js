import * as request from '../lib/request';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;


export const login = async (email, password) => {

   const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;

}

export const register = (firstName, lastName, email, username, password, office) => request.post(`${baseUrl}/register`, {
    firstName,
    lastName,
    email,
    username,
    password,
    office,
});

export const logout = () => request.get(`${baseUrl}/logout`);

export const getMe = async () => {

    const result = await request.get(`${baseUrl}/me`);

    return (result);
}