import { BASE_URL, getHeaders, handleResponse } from './httpClient';

export const userService = {
    login: async (credentials) => {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
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