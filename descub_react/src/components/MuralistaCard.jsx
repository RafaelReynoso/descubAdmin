import { useNavigate } from 'react-router-dom'

export function MuralistaCard({ muralista }) {

    const navigate = useNavigate()
  
    return (
      <div className="bg-zinc-800 p3 hover:bg-zinc-700 hover:cursor-pointer mt-5"
  
      onClick={()=>{
        navigate('/muralista/' + muralista.id)
      }}
      
      >
        <h1 className='font-bold upper'>Nombre:</h1>
        <p className='text-slate-400'>{muralista.nombre}</p>
        <h1 className='font-bold upper'>Apellidos:</h1>
        <p className='text-slate-400'>{muralista.apellidos}</p>
        <h1 className='font-bold upper'>Seudonimo:</h1>
        <p className='text-slate-400'>{muralista.seudonimo}</p>
        <h1 className='font-bold upper'>Foto:</h1>
        <img
        src={muralista.foto}
        alt="Foto del muralista"
        className="w-32 h-32 object-cover rounded-full"
      />
        <h1 className='font-bold upper'>Celular:</h1>
        <p className='text-slate-400'>{muralista.celular}</p>
        <h1 className='font-bold upper'>Instagram:</h1>
        <p className='text-slate-400'>{muralista.user_instagram}</p>
        <h1 className='font-bold upper'>Facebook:</h1>
        <p className='text-slate-400'>{muralista.user_facebook}</p>
        <h1 className='font-bold upper'>Email:</h1>
        <p className='text-slate-400'>{muralista.email}</p>
        <hr />
      </div>
    );
  }