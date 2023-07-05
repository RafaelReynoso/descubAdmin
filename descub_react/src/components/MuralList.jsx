import { useEffect, useState } from "react";
import { getAllMural } from "../api/usuario.api";
import { MuralCard } from "./MuralCard";

export function MuralList() {
    const [mural, setMural] = useState([]);
  
    useEffect(() => {
      async function loadMural() {
        const res = await getAllMural();
        setMural(res.data);
      }
      loadMural();
    }, []);
  
    return <div className="grid grid-cols-3 gap-3">
      {mural.map(mural =>(
          <MuralCard key={mural.id} mural={mural}></MuralCard>
      ))}
    </div>
  }