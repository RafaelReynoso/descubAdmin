import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createMuralista,
  deleteMuralista,
  updateMuralista,
  getMuralista,
} from "../api/usuario.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function MuralistaFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("apellidos", data.apellidos);
    formData.append("seudonimo", data.seudonimo);
    formData.append("foto", data.foto[0]);
    formData.append("celular", data.celular);
    formData.append("user_instagram", data.user_instagram);
    formData.append("user_facebook", data.user_facebook);
    formData.append("email", data.email);

    if (params.id) {
      await updateMuralista(params.id, formData);
      toast.success("Muralista Actualizado");
    } else {
      await createMuralista(formData);
      toast.success("Muralista Creado");
    }

    navigate("/muralista");
  });

  useEffect(() => {
    async function loadMuralista() {
      if (params.id) {
        const res = await getMuralista(params.id);
        setValue("nombre", res.data.nombre);
        setValue("apellidos", res.data.apellidos);
        setValue("seudonimo", res.data.seudonimo);
        setValue("celular", res.data.celular);
        setValue("user_instagram", res.data.user_instagram);
        setValue("user_facebook", res.data.user_facebook);
        setValue("email", res.data.email);
      }
    }
    loadMuralista();
  }, []);

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
            id="seudonimo"
            {...register("seudonimo", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark```jsx
:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="seudonimo"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Seudonimo
          </label>
        </div>
        {errors.seudonimo && <span className="text-red-500">Este campo es requerido</span>}

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="file"
            {...register("foto", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="foto"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Foto
          </label>
        </div>
        {errors.foto && <span className="text-red-500">Este campo es requerido</span>}

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="celular"
            {...register("celular", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="celular"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Celular
          </label>
        </div>
        {errors.celular && <span className="text-red-500">Este campo es requerido</span>}

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="user_instagram"
            {...register("user_instagram", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="user_instagram"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Instagram
          </label>
        </div>
        {errors.user_instagram && <span className="text-red-500">Este campo es requerido</span>}

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="user_facebook"
            {...register("user_facebook", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="user_facebook"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Facebook
          </label>
        </div>
        {errors.user_facebook && <span className="text-red-500">Este campo es requerido</span>}

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="email"
            {...register("email", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
            "   />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        {errors.email && <span className="text-red-500">Este campo es requerido</span>}

        <button className="bg-green-500 p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
      </form>

      {params.id && (
        <button
          className="bg-red-500 p-3 rounded-lg w-48 mt-3"
          onClick={async () => {
            const accepted = window.confirm("¿Estás seguro de eliminar?");
            if (accepted) {
              await deleteMuralista(params.id);
              toast.success("Muralista Eliminado");
              navigate("/muralista");
            }
          }}
        >
          Borrar
        </button>
      )}
    </div>
  );
}
