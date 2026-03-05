import { MoreVertical, Edit2, Trash2 } from 'lucide-react';
const Products = () => {

    const productsData = [
        { id: 1, name: 'Producto 1', price: 100, stock: 10 },
        { id: 2, name: 'Producto 2', price: 200, stock: 20 },
        { id: 3, name: 'Producto 3', price: 300, stock: 30 },
    ];
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Gestión de Productos</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    + Nuevo Producto
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Nombre</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Precio</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Stock</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {productsData.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-gray-900">{product.name}</div>

                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{product.price}</td>
                                <td className="px-6 py-4 text-sm">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium`}>
                                        {product.stock}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-blue-600 mr-3"><Edit2 size={18} /></button>
                                    <button className="text-gray-400 hover:text-red-600"><Trash2 size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;
