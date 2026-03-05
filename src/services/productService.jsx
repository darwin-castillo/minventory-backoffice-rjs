import { BASE_URL, getHeaders, handleResponse } from './httpClient';

export const productService = {
    getAll: async () => {
        const response = await fetch(`${BASE_URL}/products`, { headers: getHeaders() });
        return handleResponse(response);
    },

    getById: async (id) => {
        const response = await fetch(`${BASE_URL}/products/${id}`, { headers: getHeaders() });
        return handleResponse(response);
    },

    create: async (productData) => {
        const response = await fetch(`${BASE_URL}/products`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(productData),
        });
        return handleResponse(response);
    },

    update: async (id, productData) => {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: 'PUT',
            headers: getHeaders(),
            body: JSON.stringify(productData),
        });
        return handleResponse(response);
    }
};