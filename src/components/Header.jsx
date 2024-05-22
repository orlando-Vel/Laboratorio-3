import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-500 text-lg font-bold">
          <Link to="/">
            <img
              src="vite.svg"
              alt="Company Logo"
              className="h-8 inline-block mr-2"
            />
            Nature In Action
          </Link>
        </div>
        <ul className="flex space-x-4 text-green-600">
          <li>
            <Link to="/" className="hover:text-black">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/tours" className="hover:text-black">
              Tours
            </Link>
          </li>
          <li>
            <Link to="/packages" className="hover:text-black">
              Paquetes
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-black">
              Galeria
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-black">
              Contatenos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
