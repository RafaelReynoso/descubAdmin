import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createColor, deleteColor, updateColor, getColor } from "../api/usuario.api";
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-hot-toast";

export function ColorFormPage() {
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
      await updateColor(params.id, data)
      toast.success('Color Actualizado')
    }else{
      await createColor(data)
      toast.success('Color Creado')
    }

    navigate("/color")

  });

  useEffect(() =>{
    async function loadColor() {
      if(params.id){
        const res = await getColor(params.id)
        setValue('nombre', res.data.nombre)
        setValue('codigo', res.data.codigo)
        setValue('red', res.data.red)
        setValue('blue', res.data.blue)
        setValue('green', res.data.green)
      }
    }
    loadColor()

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
          placeholder="Codigo"
          {...register("codigo", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.codigo && <span>Este campo es requerido</span>}

        <input
        type="text"
          placeholder="RED"
          {...register("red", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.red && <span>Este campo es requerido</span>}

        <input
        type="text"
          placeholder="BLUE"
          {...register("blue", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.blue && <span>Este campo es requerido</span>}

        <input
        type="text"
          placeholder="GREEN"
          {...register("green", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.green && <span>Este campo es requerido</span>}

        <button className="bg-green-500 p-3 rounded-lg block w-full mt-3">Guardar</button>
      </form>

    {params.id && <button className="bg-red-500 p-3 rounded-lg w-48 mt-3"
     onClick={async () =>{
      const aceppted = window.confirm('Estas segunro de eliminar?')
      if (aceppted){
        await deleteColor(params.id)
        toast.success('Color Eliminado')
        navigate('/color')
      }
    }}>Delete</button>}

    </div>
  );
}
