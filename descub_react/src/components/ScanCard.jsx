import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ScanCard({ scan }) {
  const navigate = useNavigate();
  const [mural, setMural] = useState(null);
  const [usuario, setUsuario] = useState(null);

  const handleClick = () => {
    navigate(`/scan/${scan.id}`);
  };

  useEffect(() => {
    const fetchMural = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/descub/api/v1/mural/${scan.id_mural}`
        );
        if (response.ok) {
          const muralData = await response.json();
          setMural(muralData);
        } else {
          
        }
      } catch (error) {
        
      }
    };

    fetchMural();
  }, [scan.id_mural]);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/descub/api/v1/usuario/${scan.id_usuario}`
        );
        if (response.ok) {
          const usuarioData = await response.json();
          setUsuario(usuarioData);
        } else {
          
        }
      } catch (error) {
        
      }
    };

    fetchUsuario();
  }, [scan.id_usuario]);

  return (
    <div
      className="bg-zinc-800 p-6 hover:bg-zinc-700 hover:cursor-pointer mt-5 rounded-lg shadow-lg"
      onClick={handleClick}
    >
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Fecha de Registro:</h1>
        <p className="text-slate-400">{scan.fecha_registro}</p>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Mural:</h1>
        <p className="text-slate-400">{mural ? mural.nombre : "Cargando..."}</p>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Usuario:</h1>
        <p className="text-slate-400">{usuario ? usuario.nombre : "Cargando..."}</p>
      </div>
      <hr className="my-6" />
    </div>
  );
}
