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
          placeholder="Seudonimo"
          {...register("seudonimo", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.seudonimo && <span>Este campo es requerido</span>}

        <input
          type="file"
          {...register("foto", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.foto && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Celular"
          {...register("celular", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.celular && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Instagram"
          {...register("user_instagram", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.user_instagram && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Facebook"
          {...register("user_facebook", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.altuser_facebookitud && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.email && <span>Este campo es requerido</span>}

        <button className="bg-green-500 p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
      </form>

      {params.id && (
        <button
          className="bg-red-500 p-3 rounded-lg w-48 mt-3"
          onClick={async () => {
            const accepted = window.confirm("Estás seguro de eliminar?");
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
