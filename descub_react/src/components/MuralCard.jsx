import { useNavigate } from "react-router-dom";

export function MuralCard({ mural }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p3 hover:bg-zinc-700 hover:cursor-pointer mt-5"
      onClick={() => {
        navigate("/mural/" + mural.id);
      }}
    >
      <h1 className="font-bold upper">Nombre:</h1>
      <p className="text-slate-400">{mural.nombre}</p>
      <h1 className="font-bold upper">Direccion:</h1>
      <p className="text-slate-400">{mural.direccion}</p>
      <h1 className="font-bold upper">Fecha de Creacion:</h1>
      <p className="text-slate-400">{mural.fecha_creacion}</p>
      <h1 className="font-bold upper">Imagen:</h1>
      <img
        src={mural.imagen}
        alt="Foto del mural"
        className="w-32 h-32 object-cover rounded-full"
      />

      <h1 className="font-bold upper">Descripcion:</h1>
      <p className="text-slate-400">{mural.descripcion}</p>
      <h1 className="font-bold upper">Latitud:</h1>
      <p className="text-slate-400">{mural.latitud}</p>
      <h1 className="font-bold upper">Altitud:</h1>
      <p className="text-slate-400">{mural.altitud}</p>
      <h1 className="font-bold upper">Muralista:</h1>
      <p className="text-slate-400">{mural.id_muralista}</p>

      <hr />
    </div>
  );
}
