import { useEffect, useState } from "react";
import { getAllColor } from "../api/usuario.api";
import { ColorCard } from "./ColorCard";

export function ColorList() {
  const [color, setColor] = useState([]);

  useEffect(() => {
    async function loadColor() {
      const res = await getAllColor();
      setColor(res.data);
    }
    loadColor();
  }, []);

  return <div className="grid grid-cols-3 gap-3">
    {color.map(color =>(
        <ColorCard key={color.id} color={color}></ColorCard>
    ))}
  </div>
}
