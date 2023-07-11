// UsuarioList.jsx
import { useEffect, useState } from "react";
import { getAllUsuario } from "../api/usuario.api";
import { UsuarioCard } from "./UsuarioCard";

export function UsuarioList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function loadUsuarios() {
      const res = await getAllUsuario();
      setUsuarios(res.data);
    }
    loadUsuarios();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left bg-white border border-gray-200 dark:border-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Apellidos
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha de Registro
            </th>
            <th scope="col" className="px-6 py-3">
              Detalles
            </th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <UsuarioCard key={usuario.id} usuario={usuario} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
