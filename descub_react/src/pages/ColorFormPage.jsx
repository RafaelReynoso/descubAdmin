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
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="nombre" className="text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="nombre"
            {...register("nombre", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full"
          />
          {errors.nombre && <span className="text-red-500 text-sm">Este campo es requerido</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="codigo" className="text-sm font-medium text-gray-700">Código</label>
          <input
            type="text"
            id="codigo"
            {...register("codigo", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full"
          />
          {errors.codigo && <span className="text-red-500 text-sm">Este campo es requerido</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="red" className="text-sm font-medium text-gray-700">RED</label>
          <input
            type="text"
            id="red"
            {...register("red", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full"
          />
          {errors.red && <span className="text-red-500 text-sm">Este campo es requerido</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="blue" className="text-sm font-medium text-gray-700">BLUE</label>
          <input
            type="text"
            id="blue"
            {...register("blue", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full"
          />
          {errors.blue && <span className="text-red-500 text-sm">Este campo es requerido</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="green" className="text-sm font-medium text-gray-700">GREEN</label>
          <input
            type="text"
            id="green"
            {...register("green", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full"
          />
          {errors.green && <span className="text-red-500 text-sm">Este campo es requerido</span>}
        </div>

        <button className="bg-green-500 p-3 rounded-lg block w-full text-white font-medium">
          Guardar
        </button>
      </form>

      {params.id && (
        <button
          className="bg-red-500 p-3 rounded-lg w-48 mt-3 text-white font-medium"
          onClick={async () => {
            const accepted = window.confirm('¿Estás seguro de eliminar?')
            if (accepted) {
              await deleteColor(params.id)
              toast.success('Color Eliminado')
              navigate('/color')
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
