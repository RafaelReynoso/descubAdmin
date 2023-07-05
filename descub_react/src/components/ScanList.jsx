import { useEffect, useState } from "react";
import { getAllScan } from "../api/usuario.api";
import { ScanCard } from "./ScanCard";

export function ScanList() {
    const [scan, setScan] = useState([]);
  
    useEffect(() => {
      async function loadScan() {
        const res = await getAllScan();
        setScan(res.data);
      }
      loadScan();
    }, []);
  
    return <div className="grid grid-cols-3 gap-3">
      {scan.map(scan =>(
          <ScanCard key={scan.id} scan={scan}></ScanCard>
      ))}
    </div>
  }