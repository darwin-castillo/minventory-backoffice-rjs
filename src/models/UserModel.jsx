export const initialUserState = {
    name: '',
    email: '',
    password: '',
    role: 'viewer',
};

export const UserModel = (data = {}) => ({
    id: data._id || data.id || '',
    name: data.name || '',
    email: data.email || '',
    role: data.role || 'viewer', // admin, editor, viewer
    avatar: data.avatar || `https://ui-avatars.com/api/?name=${data.name || 'User'}`,
    lastLogin: data.lastLogin ? new Date(data.lastLogin).toLocaleString() : 'Nunca',
});