import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    if (!product) return null;

    return (
        <div
            onClick={() => navigate("/product/details", { state: { product } })}
            className="w-[15rem] m-3 transition-all cursor-pointer border rounded-lg shadow-md hover:shadow-lg hover:scale-105"
        >
            {/* Product Image */}
            <div className="h-[20rem] overflow-hidden rounded-t-lg">
                <img
                    className="h-full w-full object-cover object-center"
                    src={product.imageUrl}
                    alt={product.title || "Product"}
                />
            </div>

            {/* Product Details */}
            <div className="bg-white p-3 rounded-b-lg">
                <div>
                    <p className="font-bold text-gray-600">{product.brand}</p>
                    <p className="text-sm text-gray-800 truncate">{product.title}</p>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                    <p className="font-semibold text-lg text-gray-900">
                        ₹{product.discountedPrice}
                    </p>
                    <p className="line-through text-gray-500 text-sm">₹{product.price}</p>
                    <p className="text-green-600 font-semibold text-sm">
                        {product.discountPersent}% off
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
