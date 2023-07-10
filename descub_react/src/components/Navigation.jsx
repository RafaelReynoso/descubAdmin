import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className="flex justify-between py-3">
        <Link to="/home" onClick={() => handleLinkClick("/home")}>
          <h1 className="font-bold text-3xl mb-4">Home</h1>
        </Link>

        <Link to="/usuario" onClick={() => handleLinkClick("/usuario")}>
          <h1 className="font-bold text-3xl mb-4">Usuarios</h1>
        </Link>

        <Link to="/muralista" onClick={() => handleLinkClick("/muralista")}>
          <h1 className="font-bold text-3xl mb-4">Muralista</h1>
        </Link>

        <Link to="/mural" onClick={() => handleLinkClick("/mural")}>
          <h1 className="font-bold text-3xl mb-4">Mural</h1>
        </Link>

        <Link to="/color" onClick={() => handleLinkClick("/color")}>
          <h1 className="font-bold text-3xl mb-4">Color</h1>
        </Link>

        <Link to="/paleta" onClick={() => handleLinkClick("/paleta")}>
          <h1 className="font-bold text-3xl mb-4">Paleta</h1>
        </Link>

        <Link to="/scan" onClick={() => handleLinkClick("/scan")}>
          <h1 className="font-bold text-3xl mb-4">Scan</h1>
        </Link>
      </div>

      <div className="flex justify-center mt-3">
        {activeLink === "/usuario" && (
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
            <Link to="/usuario-create">Crear Usuario</Link>
          </button>
        )}
        {activeLink === "/muralista" && (
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
            <Link to="/muralista-create">Crear Muralista</Link>
          </button>
        )}
        {activeLink === "/mural" && (
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
            <Link to="/mural-create">Crear Mural</Link>
          </button>
        )}
        {activeLink === "/color" && (
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
            <Link to="/color-create">Crear Color</Link>
          </button>
        )}
        {activeLink === "/paleta" && (
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
            <Link to="/paleta-create">Crear Paleta</Link>
          </button>
        )}
        {activeLink === "/scan" && (
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
            <Link to="/scan-create">Crear Scan</Link>
          </button>
        )}
      </div>
    </div>
  );
}
