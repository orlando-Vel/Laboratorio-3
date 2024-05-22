import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-sm w-full h-96 rounded overflow-hidden shadow-lg bg-white flex flex-col">
      <div className="h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="px-6 py-4 flex-1 flex flex-col">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default Card;
