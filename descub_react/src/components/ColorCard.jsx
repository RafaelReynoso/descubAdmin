import { useNavigate } from 'react-router-dom'

export function ColorCard({ color }) {

  const navigate = useNavigate()

  return (
    <div className="bg-zinc-800 p3 hover:bg-zinc-700 hover:cursor-pointer mt-5"

    onClick={()=>{
      navigate('/color/' + color.id)
    }}
    
    >
      <h1 className='font-bold upper'>Nombre:</h1>
      <p className='text-slate-400'>{color.nombre}</p>
      <h1 className='font-bold upper'>Codigo:</h1>
      <p className='text-slate-400'>{color.codigo}</p>
      <h1 className='font-bold upper'>RED:</h1>
      <p className='text-slate-400'>{color.red}</p>
      <h1 className='font-bold upper'>BLUE:</h1>
      <p className='text-slate-400'>{color.blue}</p>
      <h1 className='font-bold upper'>GREEN:</h1>
      <p className='text-slate-400'>{color.green}</p>
      <hr />
    </div>
  );
}

