import { BASE_URL, getHeaders, handleResponse } from './httpClient';

export const userService = {


    create: async (userData) => {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(userData),
        });
        return handleResponse(response);
    },

    getAll: async () => {
        const response = await fetch(`${BASE_URL}/users`, { headers: getHeaders() });
        return handleResponse(response);
    },

    delete: async (id) => {
        const response = await fetch(`${BASE_URL}/users/${id}`, {
            method: 'DELETE',
            headers: getHeaders(),
        });
        return handleResponse(response);
    }
};