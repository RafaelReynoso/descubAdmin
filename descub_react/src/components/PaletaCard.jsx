import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function PaletaCard({ paleta }) {
  const navigate = useNavigate();
  const [mural, setMural] = useState(null);
  const [color, setColor] = useState(null);


  const handleClick = () => {
    navigate(`/paleta/${paleta.id}`);
  };

  useEffect(() => {
    const fetchMural = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/descub/api/v1/mural/${paleta.id_mural}`
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
  }, [paleta.id_mural]);

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/descub/api/v1/color/${paleta.id_color}`
        );
        if (response.ok) {
          const colorData = await response.json();
          setColor(colorData);
        } else {
          
        }
      } catch (error) {
        
      }
    };

    fetchColor();
  }, [paleta.id_color]);

  return (
    <div
      className="bg-zinc-800 p-6 hover:bg-zinc-700 hover:cursor-pointer mt-5 rounded-lg shadow-lg"
      onClick={handleClick}
    >
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Mural:</h1>
        <p className="text-slate-400">
        {mural ? mural.nombre : "Cargando..."}
        
          </p>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Color:</h1>
        <p className="text-slate-400">
        {color ? color.codigo : "Cargando..."}
          </p>
      </div>
      <hr className="my-6" />
    </div>
  );
}
