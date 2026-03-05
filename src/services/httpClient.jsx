const BASE_URL = "https://minventory-express-mdb.vercel.app/api";

export const getHeaders = () => {
    const savedUser = localStorage.getItem('admin_user');
    const token = savedUser ? JSON.parse(savedUser).token : null;

    return {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    };
};

export const handleResponse = async (response) => {
    const data = await response.json();
    console.log("data", data);
    if (data.status !== 200 && data.status !== 201) {
        throw new Error(data.message || 'Error en la petición');
    }
    console.log("data", data.value);
    return data.value;
};

export { BASE_URL };