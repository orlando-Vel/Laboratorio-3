import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Card from "./Card";

const cardsData = [
  {
    image: "naturaleza2.jpg",
    title: "Beautiful Beach",
    description: "Viaja a las comarcas y descubre la belleza de sus islas",
  },
  {
    image: "naturaleza3.jpg",
    title: "Hermosas playas",
    description:
      "Disfruta de el clima soleado de Panama en sus bonitas playas.",
  },
  {
    image: "naturaleza1.jpg",
    title: "Aventura en los bosquez",
    description: "Explora senderos en los bonitos bosquez de Panama.",
  },
];

const CardCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    let interval;

    const startAutoplay = () => {
      interval = setInterval(() => {
        sliderRef.current.slickNext();
      }, 3000);
    };

    const stopAutoplay = () => {
      clearInterval(interval);
    };

    startAutoplay();

    return stopAutoplay;
  }, []);

  return (
    <div className="container mx-auto py-8 relative">
      <Slider ref={sliderRef} {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className="px-2">
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </Slider>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 hover:bg-green-500 rounded-full p-2 cursor-pointer"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 hover:bg-green-500 rounded-full p-2 cursor-pointer"
        onClick={() => sliderRef.current.slickNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default CardCarousel;
