
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center transition-shadow duration-200 hover:shadow-xl flex flex-col">
      <div className="relative pb-[75%]"> {/* 4:3 Aspect Ratio */}
        <img src={product.imageUrl} alt={product.name} className="absolute h-full w-full object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 my-1">{product.category}</p>
        <p className="text-xl font-semibold text-green-600 my-2">${product.price.toFixed(2)}</p>
        <div className="mt-auto">
            <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
            Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
