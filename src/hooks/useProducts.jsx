import { useState, useEffect, useCallback } from 'react';
import { productService } from '../services/productService';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await productService.getAll();
            const rawProducts = data.products || data;
            const modeledProducts = rawProducts.map(item => ProductModel(item));
            setProducts(modeledProducts);
        } catch (err) {
            setError(err.message || "Error al cargar productos");
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return { products, loading, error, refresh: fetchProducts };
};