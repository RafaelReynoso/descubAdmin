import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createMural,
  deleteMural,
  updateMural,
  getMural,
} from "../api/usuario.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getAllMuralista } from "../api/muralista.api";

export function MuralFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const [muralistas, setMuralistas] = useState([]);

  useEffect(() => {
    async function loadMural() {
      if (params.id) {
        const res = await getMural(params.id);
        setValue("nombre", res.data.nombre);
        setValue("direccion", res.data.direccion);
        setValue("fecha_creacion", res.data.fecha_creacion);
        setValue("imagen", res.data.imagen);
        setValue("descripcion", res.data.descripcion);
        setValue("latitud", res.data.latitud);
        setValue("altitud", res.data.altitud);
        setValue("id_muralista", res.data.id_muralista);
      }
    }
    loadMural();
  }, []);

  useEffect(() => {
    async function fetchMuralistas() {
      const res = await getAllMuralista();
      setMuralistas(res.data);
    }
    fetchMuralistas();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("direccion", data.direccion);
    formData.append("fecha_creacion", data.fecha_creacion);
    formData.append("imagen", data.imagen[0]);
    formData.append("descripcion", data.descripcion);
    formData.append("latitud", data.latitud);
    formData.append("altitud", data.altitud);
    formData.append("id_muralista", data.id_muralista);

    if (params.id) {
      await updateMural(params.id, formData);
      toast.success("Mural Actualizado");
    } else {
      await createMural(formData);
      toast.success("Mural Creado");
    }

    navigate("/mural");
  });

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
          placeholder="Direccion"
          {...register("direccion", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.direccion && <span>Este campo es requerido</span>}

        <input
          type="date"
          placeholder="Fecha de Creacion"
          {...register("fecha_creacion", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.fecha_creacion && <span>Este campo es requerido</span>}

        <input
          type="file"
          {...register("imagen", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.imagen && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Descripcion"
          {...register("descripcion", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.descripcion && <span>Este campo es requerido</span>}

        <input
          type="number"
          step="0.00000001"
          placeholder="Latitud"
          {...register("latitud", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.latitud && <span>Este campo es requerido</span>}

        <input
          type="number"
          step="0.00000001"
          placeholder="Altitud"
          {...register("altitud", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.altitud && <span>Este campo es requerido</span>}

        <select
          {...register("id_muralista", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        >
          {muralistas.map((muralista) => (
            <option key={muralista.id} value={muralista.id}>
              {muralista.nombre}
            </option>
          ))}
        </select>
        {errors.id_muralista && <span>Este campo es requerido</span>}

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
              await deleteMural(params.id);
              toast.success("Mural Eliminado");
              navigate("/mural");
            }
          }}
        >
          Borrar
        </button>
      )}
    </div>
  );
}
