import { BASE_URL, getHeaders, handleResponse } from './httpClient';

export const customerService = {
  // Obtener todos los clientes
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/customers`, {
      headers: getHeaders()
    });
    return handleResponse(response);
  },

  // Obtener un cliente por ID
  getById: async (id) => {
    const response = await fetch(`${BASE_URL}/customers/${id}`, {
      headers: getHeaders()
    });
    return handleResponse(response);
  },

  // Crear un nuevo cliente
  create: async (customerData) => {
    const response = await fetch(`${BASE_URL}/customers`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(customerData),
    });
    return handleResponse(response);
  },

  // Actualizar datos del cliente
  update: async (id, customerData) => {
    const response = await fetch(`${BASE_URL}/customers/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(customerData),
    });
    return handleResponse(response);
  },

  // Eliminar cliente
  delete: async (id) => {
    const response = await fetch(`${BASE_URL}/customers/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    return handleResponse(response);
  }
};