import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productService } from '../services/productService';
import { initialProductState } from '../models/ProductModel';
import { ChevronLeft, Save, Loader2, Package } from 'lucide-react';

const AddProduct = () => {
    const [formData, setFormData] = useState(initialProductState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            await productService.create(formData);
            // Navegamos de vuelta a la lista de productos tras el éxito
            navigate('/productos');
        } catch (err) {
            setError("Error al conectar con la API. Revisa los datos.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Cabecera / Breadcrumbs */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
                <ChevronLeft size={20} /> Volver al inventario
            </button>

            <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-600 rounded-2xl text-white">
                    <Package size={28} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Crear Nuevo Producto</h1>
                    <p className="text-gray-500">Completa la información para registrar el artículo en el sistema.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 space-y-6">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 flex items-center gap-2">
                            <span className="font-bold">!</span> {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 gap-6">
                        {/* Nombre */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nombre del Producto</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ej: Laptop Pro 14"
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>

                        {/* Fila: Precio y Stock */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Precio de Venta ($)</label>
                                <input
                                    name="price"
                                    type="number"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Stock Inicial</label>
                                <input
                                    name="stock"
                                    type="number"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    placeholder="Cantidad en almacén"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                        </div>

                        {/* Descripción */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Descripción del Producto</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Escribe los detalles técnicos o comerciales..."
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer del Formulario */}
                <div className="bg-gray-50 p-8 flex justify-end gap-4 border-t border-gray-100">
                    <button
                        type="button"
                        onClick={() => navigate('/productos')}
                        className="px-6 py-3 font-bold text-gray-500 hover:bg-gray-200 rounded-xl transition-all"
                    >
                        Descartar
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-200 transition-all disabled:bg-blue-300"
                    >
                        {isSubmitting ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <><Save size={20} /> Registrar Producto</>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;