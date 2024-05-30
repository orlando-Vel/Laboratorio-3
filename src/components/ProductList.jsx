import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "Paquete de Aventura en la Selva",
      description: "Explora la selva y descubre paisajes increíbles.",
      price: 1200,
      duration: 7,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Tour Cultural por la Ciudad",
      description: "Sumérgete en la cultura local con este tour.",
      price: 800,
      duration: 4,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Escapada a la Playa",
      description: "Disfruta de unas relajantes vacaciones en la playa.",
      price: 1500,
      duration: 10,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      title: "Escapada a la Playa",
      description: "Disfruta de unas relajantes vacaciones en la playa.",
      price: 1500,
      duration: 10,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      title: "Escapada a la Playa",
      description: "Disfruta de unas relajantes vacaciones en la playa.",
      price: 800,
      duration: 10,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      title: "Escapada a la Playa",
      description: "Disfruta de unas relajantes vacaciones en la playa.",
      price: 750,
      duration: 60,
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-500">
        Nuestros Paquetes de Viaje
      </h1>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
