import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition-transform duration-300 hover:scale-105 hover:bg-green-300">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-black text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
          Precio: ${product.price}
        </span>
        <span className="inline-block bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
          Duración: {product.duration} días
        </span>
      </div>
      <div className="px-6 py-4">
        <Link to={`/product/${product.id}`}>
          <button className="bg-green-300 hover:bg-green-500 text-black font-bold py-2 px-4 rounded">
            Ver Más
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
