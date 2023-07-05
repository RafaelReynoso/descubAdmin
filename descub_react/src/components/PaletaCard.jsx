import { useNavigate } from "react-router-dom";

export function PaletaCard({ paleta }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p3 hover:bg-zinc-700 hover:cursor-pointer mt-5"
      onClick={() => {
        navigate("/paleta/" + paleta.id);
      }}
    >
      <h1 className="font-bold upper">Mural:</h1>
      <p className="text-slate-400">{paleta.id_mural}</p>
      <h1 className="font-bold upper">Color:</h1>
      <p className="text-slate-400">{paleta.id_color}</p>
      
      <hr />
    </div>
  );
}
