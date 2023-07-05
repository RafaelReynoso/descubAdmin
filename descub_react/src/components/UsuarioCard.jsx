import { useNavigate } from 'react-router-dom'

export function UsuarioCard({ usuario }) {

  const navigate = useNavigate()

  return (
    <div className="bg-zinc-800 p3 hover:bg-zinc-700 hover:cursor-pointer mt-5"

    onClick={()=>{
      navigate('/usuario/' + usuario.id)
    }}
    
    >
      <h1 className='font-bold upper'>Nombre:</h1>
      <p className='text-slate-400'>{usuario.nombre}</p>
      <h1 className='font-bold upper'>Apellidos:</h1>
      <p className='text-slate-400'>{usuario.apellidos}</p>
      <h1 className='font-bold upper'>Usuario:</h1>
      <p className='text-slate-400'>{usuario.usuario}</p>
      <h1 className='font-bold upper'>Email:</h1>
      <p className='text-slate-400'>{usuario.email}</p>
      <h1 className='font-bold upper'>Contraseña:</h1>
      <p className='text-slate-400'>{usuario.contrasena}</p>
      <h1 className='font-bold upper'>Fecha de Registro:</h1>
      <p className='text-slate-400'>{usuario.fecha_registro}</p>
      <hr />
    </div>
  );
}

