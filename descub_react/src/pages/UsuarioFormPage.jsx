import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createUsuario, deleteUsuario, updateUsuario, getUsuario } from "../api/usuario.api";
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-hot-toast";

export function UsuarioFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const navigate = useNavigate()
  const params = useParams()
  

  const onSubmit = handleSubmit(async (data) => {
    if(params.id){
      await updateUsuario(params.id, data)
      toast.success('Usuario Actualizado')
    }else{
      await createUsuario(data)
      toast.success('Usuario Creado')
    }

    navigate("/usuario")

  });

  useEffect(() =>{
    async function loadUsuario() {
      if(params.id){
        const res = await getUsuario(params.id)
        setValue('nombre', res.data.nombre)
        setValue('apellidos', res.data.apellidos)
        setValue('usuario', res.data.usuario)
        setValue('email', res.data.email)
        setValue('contrasena', res.data.contrasena)
        setValue('fecha_registro', res.data.fecha_registro)
      }
    }
    loadUsuario()

  }, [])

  return (
    <div className="max-w-xl mx-auto mt-5">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          {...register("nombre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.nombre && <span>Este campo es requerido</span>}

        <input
        type="text"
          placeholder="Apellidos"
          {...register("apellidos", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.apellidos && <span>Este campo es requerido</span>}

        <input
        type="text"
          placeholder="Usuario"
          {...register("usuario", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.usuario && <span>Este campo es requerido</span>}

        <input
        type="text"
          placeholder="Email"
          {...register("email", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.email && <span>Este campo es requerido</span>}

        <input
        type="text"
          placeholder="Contraseña"
          {...register("contrasena", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.contrasena && <span>Este campo es requerido</span>}

        <input
        type="date"
          placeholder="Fecha de Registro"
          {...register("fecha_registro", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.fecha_registro && <span>Este campo es requerido</span>}
        <button className="bg-green-500 p-3 rounded-lg block w-full mt-3">Guardar</button>
      </form>

    {params.id && <button className="bg-red-500 p-3 rounded-lg w-48 mt-3"
     onClick={async () =>{
      const aceppted = window.confirm('Estas segunro de eliminar?')
      if (aceppted){
        await deleteUsuario(params.id)
        toast.success('Usuario Eliminado')
        navigate('/usuario')
      }
    }}>Delete</button>}

    </div>
  );
}
