import * as request from '../lib/request';

const baseUrl = 'https://api-n4krry33ka-ew.a.run.app/users';
// const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (username, email, password) => request.post(`${baseUrl}/register`, {
    username,
    email,
    password,
});

export const logout = () => request.get(`${baseUrl}/logout`);
