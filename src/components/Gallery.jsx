import React from "react";

const Gallery = () => {
  const images = [
    /*"https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",*/
    "naturaleza3.jpg",
    "naturaleza3.jpg",
    "naturaleza3.jpg",
    "naturaleza3.jpg",
  ];

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Conoce Panama</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery image ${index + 1}`}
            className="rounded shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
