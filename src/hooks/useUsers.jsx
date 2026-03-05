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
            const rawUsers = data.users || data;
            const modeledUsers = rawUsers.map(item => UserModel(item));
            setUsers(modeledUsers);
        } catch (err) {
            setError(err.message || "Error al cargar usuarios");
        } finally {
            setLoading(false);
        }
    };

    const refresh = () => fetchUsers();

    return { users, loading, error, refresh };
};