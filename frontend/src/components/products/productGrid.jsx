import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./productCard"

const ProductsGrid = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/productListing")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">🛍️ Latest Products</h2>
            <div className="flex flex-wrap justify-start">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                ) : (
                    <p className="text-gray-500">No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ProductsGrid;
