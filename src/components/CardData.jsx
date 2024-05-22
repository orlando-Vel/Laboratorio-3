//
//Este componente no se esta usando, deje de usarlo para usar el carrusel
// y pase la data de las card directame al otro componente
//
import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </main>
  );
};

export default Content;
