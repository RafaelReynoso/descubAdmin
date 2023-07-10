import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createScan,
  deleteScan,
  updateScan,
  getScan,
} from "../api/usuario.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { getAllMural } from "../api/usuario.api";
import { getAllUsuario } from "../api/usuario.api";

export function ScanFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const [murales, setMurales] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function loadScan() {
      if (params.id) {
        const res = await getScan(params.id);
        setValue("fecha_registro", res.data.fecha_registro);
        setValue("id_mural", res.data.id_mural);
        setValue("id_usuario", res.data.id_usuario);
      }
    }
    loadScan();
  }, []);

  useEffect(() => {
    async function fetchMurales() {
      const res = await getAllMural();
      setMurales(res.data);
    }
    fetchMurales();

    async function fetchUsuarios() {
      const res = await getAllUsuario();
      setUsuarios(res.data);
    }
    fetchUsuarios();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("fecha_registro", data.fecha_registro);
    formData.append("id_mural", data.id_mural);
    formData.append("id_usuario", data.id_usuario);

    if (params.id) {
      await updateScan(params.id, formData);
      toast.success("Scan Actualizado");
    } else {
      await createScan(formData);
      toast.success("Scan Creado");
    }

    navigate("/scan");
  });

  return (
    <div className="max-w-xl mx-auto mt-5">
      <form onSubmit={onSubmit}>
      <input
          type="date"
          placeholder="Fecha de Registro"
          {...register("fecha_registro", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.fecha_registro && <span>Este campo es requerido</span>}
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
          {...register("id_usuario", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        >
          {usuarios.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {usuario.nombre}
            </option>
          ))}
        </select>
        {errors.id_usuario && <span>Este campo es requerido</span>}

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
              await deleteScan(params.id);
              toast.success("Scan Eliminado");
              navigate("/scan");
            }
          }}
        >
          Borrar
        </button>
      )}
    </div>
  );
}
