import { useState } from 'react';
import { useProducts } from '../hooks/useProducts'; // Importamos nuestro nuevo Hook
import { Package, Plus, Loader2, AlertCircle, RefreshCw, LayoutGrid, List } from 'lucide-react';

import { useStores } from '../hooks/useStores';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../hooks/useGlobal';

const Products = () => {
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState('grid');
    const { products, loading, error, refresh } = useProducts();
    const { stores, loadingStores, errorStores } = useStores();
    const { selectedRoute, selectRoute } = useGlobal("products");



    console.log(stores.length > 0 ? "La tienda es " + stores[0].name : "No hay tiendas registradas");

    if (loading) return (
        <div className="h-96 flex items-center justify-center">
            <Loader2 className="animate-spin text-blue-600" size={40} />
        </div>
    );

    if (error) return (
        <div className="p-8 text-center bg-red-50 rounded-2xl border border-red-100">
            <AlertCircle className="mx-auto text-red-500 mb-2" />
            <p className="text-red-700 font-medium">{error}</p>
            <button onClick={refresh} className="mt-4 text-sm text-red-600 underline">Reintentar</button>
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Productos</h2>
                <div className="flex gap-2 items-center">
                    <button onClick={refresh} title="Actualizar" className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <RefreshCw size={20} />
                    </button>
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            title="Vista de cuadrícula"
                            className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('table')}
                            title="Vista de tabla"
                            className={`p-1.5 rounded-md transition-all ${viewMode === 'table' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <List size={18} />
                        </button>
                    </div>
                    <button
                        onClick={() => navigate('/productos/nuevo')} // ABRIR MODAL
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-200"
                    >
                        <Plus size={20} /> Nuevo Producto
                    </button>

                </div>
            </div>

            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <div key={product._id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-gray-800">{product.name}</h3>
                            <p className="text-blue-600 font-black mt-2">${product.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-sm">
                                <th className="p-4 font-semibold text-gray-600">Nombre</th>
                                <th className="p-4 font-semibold text-gray-600">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product._id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-medium text-gray-800">{product.name}</td>
                                    <td className="p-4 text-blue-600 font-bold">${product.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}


        </div>

    );
};


export default Products;
