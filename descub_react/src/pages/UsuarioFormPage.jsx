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
    if (params.id) {
      await updateUsuario(params.id, data)
      toast.success('Usuario Actualizado')
    } else {
      await createUsuario(data)
      toast.success('Usuario Creado')
    }

    navigate("/usuario")
  });

  useEffect(() => {
    async function loadUsuario() {
      if (params.id) {
        const res = await getUsuario(params.id)
        const { nombre, apellidos, usuario, email, contrasena, fecha_registro } = res.data;
        setValue('nombre', nombre)
        setValue('apellidos', apellidos)
        setValue('usuario', usuario)
        setValue('email', email)
        setValue('contrasena', contrasena)
        setValue('fecha_registro', fecha_registro)
      }
    }
    loadUsuario()
  }, [params.id, setValue])

  return (
    <div className="max-w-xl mx-auto mt-5">
      <form onSubmit={onSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="nombre"
            {...register("nombre", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="nombre"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre
          </label>
        </div>
        {errors.nombre && <span className="text-red-500">Este campo es requerido</span>}

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="apellidos"
            {...register("apellidos", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="apellidos"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Apellidos
          </label>
        </div>
        {errors.apellidos && <span className="text-red-500">Este campo es requerido</span>}

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="usuario"
            {...register("usuario", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="usuario"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Usuario
          </label>
        </div>
        {errors.usuario && <span className="text-red-500">Este campo es requerido</span>}

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        {errors.email && <span className="text-red-500">Este campo es requerido</span>}

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            id="contrasena"
            {...register("contrasena", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="contrasena"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus```jsx
:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Contraseña
          </label>
        </div>
        {errors.contrasena && <span className="text-red-500">Este campo es requerido</span>}

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="date"
            id="fecha_registro"
            {...register("fecha_registro", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="fecha_registro"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Fecha de Registro
          </label>
        </div>
        {errors.fecha_registro && <span className="text-red-500">Este campo es requerido</span>}

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
      </form>

      {params.id && (
        <button
          className="bg-red-500 p-3 rounded-lg w-48 mt-3"
          onClick={async () => {
            const accepted = window.confirm('¿Estás seguro de eliminar?')
            if (accepted) {
              await deleteUsuario(params.id)
              toast.success('Usuario Eliminado')
              navigate('/usuario')
            }
          }}
        >
          Borrar
        </button>
      )}
    </div>
  );
}
