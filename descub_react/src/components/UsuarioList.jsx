import { useEffect, useState } from "react";
import { getAllUsuario } from "../api/usuario.api";
import { UsuarioCard } from "./UsuarioCard";

export function UsuarioList() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    async function loadUsuario() {
      const res = await getAllUsuario();
      setUsuario(res.data);
    }
    loadUsuario();
  }, []);

  return <div className="grid grid-cols-3 gap-3">
    {usuario.map(usuario =>(
        <UsuarioCard key={usuario.id} usuario={usuario}></UsuarioCard>
    ))}
  </div>
}
