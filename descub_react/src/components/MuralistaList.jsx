import { useEffect, useState } from "react";
import { getAllMuralista } from "../api/usuario.api";
import { MuralistaCard } from "./MuralistaCard";

export function MuralistaList() {
    const [muralista, setMuralista] = useState([]);
  
    useEffect(() => {
      async function loadMuralista() {
        const res = await getAllMuralista();
        setMuralista(res.data);
      }
      loadMuralista();
    }, []);
  
    return <div className="grid grid-cols-3 gap-3">
      {muralista.map(muralista =>(
          <MuralistaCard key={muralista.id} muralista={muralista}></MuralistaCard>
      ))}
    </div>
  }