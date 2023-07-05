import { useEffect, useState } from "react";
import { getAllPaleta } from "../api/usuario.api";
import { PaletaCard } from "./PaletaCard";

export function PaletaList() {
    const [paleta, setPaleta] = useState([]);
  
    useEffect(() => {
      async function loadPaleta() {
        const res = await getAllPaleta();
        setPaleta(res.data);
      }
      loadPaleta();
    }, []);
  
    return <div className="grid grid-cols-3 gap-3">
      {paleta.map(paleta =>(
          <PaletaCard key={paleta.id} paleta={paleta}></PaletaCard>
      ))}
    </div>
  }