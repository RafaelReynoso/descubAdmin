import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createPaleta,
  deletePaleta,
  updatePaleta,
  getPaleta,
} from "../api/usuario.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { getAllMural } from "../api/usuario.api";
import { getAllColor } from "../api/usuario.api";

export function PaletaFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const [murales, setMurales] = useState([]);
  const [colores, setColores] = useState([]);

  useEffect(() => {
    async function loadPaleta() {
      if (params.id) {
        const res = await getPaleta(params.id);
        setValue("id_mural", res.data.id_mural);
        setValue("id_color", res.data.id_color);
      }
    }
    loadPaleta();
  }, []);

  useEffect(() => {
    async function fetchMurales() {
      const res = await getAllMural();
      setMurales(res.data);
    }
    fetchMurales();

    async function fetchColores() {
      const res = await getAllColor();
      setColores(res.data);
    }
    fetchColores();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("id_mural", data.id_mural);
    formData.append("id_color", data.id_color);

    if (params.id) {
      await updatePaleta(params.id, formData);
      toast.success("Paleta Actualizada");
    } else {
      await createPaleta(formData);
      toast.success("Paleta Creada");
    }

    navigate("/paleta");
  });

  return (
    <div className="max-w-xl mx-auto mt-5">
      <form onSubmit={onSubmit}>
        <select
          {...register("id_mural", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        >
          {murales.map((mural) => (
            <option key={mural.id} value={mural.id}>
              {mural.nombre}
            </option>
          ))}
        </select>
        {errors.id_mural && <span>Este campo es requerido</span>}

        <select
          {...register("id_color", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        >
          {colores.map((color) => (
            <option key={color.id} value={color.id}>
              {color.nombre}
            </option>
          ))}
        </select>
        {errors.id_color && <span>Este campo es requerido</span>}

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
              await deletePaleta(params.id);
              toast.success("Paleta Eliminada");
              navigate("/paleta");
            }
          }}
        >
          Borrar
        </button>
      )}
    </div>
  );
}
