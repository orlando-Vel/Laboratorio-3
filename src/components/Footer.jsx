import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 TravelAgency. All rights reserved.</p>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#privacy" className="hover:text-green-500">
              Politicas de Privacidad
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-green-500">
              Terminos y Condiciones
            </a>
          </li>
          <li>
            <a href="#support" className="hover:text-green-500">
              Soporte
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
