import { useState, useEffect } from 'react';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await userService.getAll();
            setUsers(data.users || data);
        } catch (err) {
            setError(err.message || "Error al cargar usuarios");
        } finally {
            setLoading(false);
        }
    };

    const refresh = () => fetchUsers();

    return { users, loading, error, refresh };
};