export const CustomerModel = (data = {}) => ({
    id: data._id || data.id || '',
    name: data.name || 'Cliente Anónimo',
    email: data.email || 'sin@email.com',
    phone: data.phone || 'No registrado',
    address: data.address || 'Sin dirección',
    totalOrders: data.totalOrders || 0,
    status: data.status || 'inactive', // active, inactive, blocked
});