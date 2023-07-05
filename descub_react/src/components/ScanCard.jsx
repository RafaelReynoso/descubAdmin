import { useNavigate } from "react-router-dom";

export function ScanCard({ scan }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p3 hover:bg-zinc-700 hover:cursor-pointer mt-5"
      onClick={() => {
        navigate("/scan/" + scan.id);
      }}
    >
      <h1 className="font-bold upper">Fecha de Registro:</h1>
      <p className="text-slate-400">{scan.fecha_registro}</p>
      <h1 className="font-bold upper">Mural:</h1>
      <p className="text-slate-400">{scan.id_mural}</p>
      <h1 className="font-bold upper">Usuario:</h1>
      <p className="text-slate-400">{scan.id_usuario}</p>
      
      <hr />
    </div>
  );
}
