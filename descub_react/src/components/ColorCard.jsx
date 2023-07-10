import { useNavigate } from 'react-router-dom';


export function ColorCard({ color }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/color/${color.id}`);
  };

  return (
    <div
      className="bg-zinc-800 p-6 hover:bg-zinc-700 hover:cursor-pointer mt-5 rounded-lg shadow-lg"
      onClick={handleClick}
    >
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Nombre:</h1>
        <p className="text-slate-400">{color.nombre}</p>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Código:</h1>
        <p className="text-slate-400">{color.codigo}</p>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">RED:</h1>
        <p className="text-slate-400">{color.red}</p>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">BLUE:</h1>
        <p className="text-slate-400">{color.blue}</p>
      </div>
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">GREEN:</h1>
        <p className="text-slate-400">{color.green}</p>
      </div>
      <hr className="my-6" />
    </div>
  );
}
