import axios from "axios";

//MURALISTA
const muralistaApi = axios.create({
    baseURL: "http://localhost:8000/descub/api/v1/muralista/",
  });
  
  export const getAllMuralista = () => muralistaApi.get("/");
  export const getMuralista = (id) => muralistaApi.get('/' + id + '/')
  export const createMuralista = (muralista) => muralistaApi.post("/", muralista);
  export const deleteMuralista = (id) => muralistaApi.delete('/' + id)
  export const updateMuralista = (id, muralista) => muralistaApi.put('/' + id + '/', muralista)