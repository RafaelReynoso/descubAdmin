import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

export function MuralistaCard({ muralista }) {
  const navigate = useNavigate();
  const [fotoUrl, setFotoUrl] = useState(muralista.foto);
 

  const handleClick = () => {
    navigate(`/muralista/${muralista.id}`);
  };

 
  

  return (
    <div
      className="bg-zinc-800 p-6 hover:bg-zinc-700 hover:cursor-pointer mt-5 rounded-lg shadow-lg"
      onClick={handleClick}
    >
      <div className="flex items-center justify-center">
        <img
          src={`data:image/jpeg;base64,${fotoUrl}`}
          alt="Foto del muralista"
          className="w-32 h-32 object-cover rounded-full border-4 border-zinc-500"
        />
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-white mb-2">Nombre:</h1>
        <p className="text-slate-400 text-lg">{muralista.nombre}</p>
        <h1 className="text-2xl font-bold text-white mb-2">Apellidos:</h1>
        <p className="text-slate-400 text-lg">{muralista.apellidos}</p>
        <h1 className="text-2xl font-bold text-white mb-2">Seudonimo:</h1>
        <p className="text-slate-400 text-lg">{muralista.seudonimo}</p>
        <h1 className="text-2xl font-bold text-white mb-2">Celular:</h1>
        <p className="text-slate-400 text-lg">{muralista.celular}</p>
        <h1 className="text-2xl font-bold text-white mb-2">Instagram:</h1>
        <p className="text-slate-400 text-lg">{muralista.user_instagram}</p>
        <h1 className="text-2xl font-bold text-white mb-2">Facebook:</h1>
        <p className="text-slate-400 text-lg">{muralista.user_facebook}</p>
        <h1 className="text-2xl font-bold text-white mb-2">Email:</h1>
        <p className="text-slate-400 text-lg">{muralista.email}</p>
      </div>
    </div>
  );
}
