import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function MuralCard({ mural }) {
  const navigate = useNavigate();
  const [muralista, setMuralista] = useState(null);
  const [imagenUrl1, setImagenUrl1] = useState(null);
  const [imagenUrl2, setImagenUrl2] = useState(null);
  const [imagenUrl3, setImagenUrl3] = useState(null);


  const handleClick = () => {
    navigate(`/mural/${mural.id}`);
  };

  useEffect(() => {
    const fetchMuralista = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/descub/api/v1/muralista/${mural.id_muralista}`
        );
        if (response.ok) {
          const muralistaData = await response.json();
          setMuralista(muralistaData);
        } else {
          
        }
      } catch (error) {
        
      }
    };

    fetchMuralista();
  }, [mural.id_muralista]);

  useEffect(() => {
    if (mural.imagen1) {
      const base64Image = `data:image/jpeg;base64,${mural.imagen1}`;
      setImagenUrl1(base64Image);
    }
  }, [mural.imagen1]);

  useEffect(() => {
    if (mural.imagen2) {
      const base64Image = `data:image/jpeg;base64,${mural.imagen2}`;
      setImagenUrl2(base64Image);
    }
  }, [mural.imagen2]);

  useEffect(() => {
    if (mural.imagen3) {
      const base64Image = `data:image/jpeg;base64,${mural.imagen3}`;
      setImagenUrl3(base64Image);
    }
  }, [mural.imagen3]);

  return (
    <div
      className="bg-zinc-800 p-6 hover:bg-zinc-700 hover:cursor-pointer mt-5 rounded-lg shadow-lg"
      onClick={handleClick}
    >
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Nombre:</h1>
        <p className="text-slate-400">{mural.nombre}</p>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Direccion:</h1>
        <p className="text-slate-400">{mural.direccion}</p>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">
          Fecha de Creacion:
        </h1>
        <p className="text-slate-400">{mural.fecha_creacion}</p>
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Imagen:</h1>
      <div className="flex items-center justify-between mb-4">
        <div className="grid grid-cols-3 gap-3">
          <img
            src={imagenUrl1}
            alt="Foto del mural"
            className="w-32 h-32 object-cover mr-3"
          />
          <img
            src={imagenUrl2}
            alt="Foto del mural"
            className="w-32 h-32 object-cover mr-3"
          />
          <img
            src={imagenUrl3}
            alt="Foto del mural"
            className="w-32 h-32 object-cover mr-3"
          />
        </div>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Descripcion:</h1>
        <p className="text-slate-400">{mural.descripcion}</p>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Latitud:</h1>
        <p className="text-slate-400">{mural.latitud}</p>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Altitud:</h1>
        <p className="text-slate-400">{mural.altitud}</p>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold text-white mb-2">Muralista:</h1>
        <p className="text-slate-400">
          {muralista ? muralista.nombre : "Cargando..."}
        </p>
      </div>
    </div>
  );
}
