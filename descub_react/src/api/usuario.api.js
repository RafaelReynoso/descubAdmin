import axios from "axios";



//USUARIO
const usuarioApi = axios.create({
  baseURL: "http://localhost:8000/descub/api/v1/usuario/",
});

export const getAllUsuario = () => usuarioApi.get("/");
export const getUsuario = (id) => usuarioApi.get('/' + id + '/')
export const createUsuario = (usuario) => usuarioApi.post("/", usuario);
export const deleteUsuario = (id) => usuarioApi.delete('/' + id)
export const updateUsuario = (id, usuario) => usuarioApi.put('/' + id + '/', usuario)

//MURALISTA
const muralistaApi = axios.create({
  baseURL: "http://localhost:8000/descub/api/v1/muralista/",
  headers: {
    'Content-Type': 'multipart/form-data' // Agrega este encabezado para enviar FormData
  }
});

export const getAllMuralista = () => muralistaApi.get("/");
export const getMuralista = (id) => muralistaApi.get('/' + id + '/')
export const createMuralista = (muralista) => muralistaApi.post("/", muralista);
export const deleteMuralista = (id) => muralistaApi.delete('/' + id)
export const updateMuralista = (id, muralista) => muralistaApi.put('/' + id + '/', muralista)

//MURAL
const muralApi = axios.create({
  baseURL: "http://localhost:8000/descub/api/v1/mural/",
});

export const getAllMural = () => muralApi.get("/");
export const getMural = (id) => muralApi.get('/' + id + '/')
export const createMural = (mural) => muralApi.post("/", mural);
export const deleteMural = (id) => muralApi.delete('/' + id)
export const updateMural = (id, mural) => muralApi.put('/' + id + '/', mural)

//COLOR
const colorApi = axios.create({
  baseURL: "http://localhost:8000/descub/api/v1/color/",
});

export const getAllColor = () => colorApi.get("/");
export const getColor = (id) => colorApi.get('/' + id + '/')
export const createColor = (color) => colorApi.post("/", color);
export const deleteColor = (id) => colorApi.delete('/' + id)
export const updateColor = (id, color) => colorApi.put('/' + id + '/', color)

//PALETA
const paletaApi = axios.create({
  baseURL: "http://localhost:8000/descub/api/v1/paleta/",
});

export const getAllPaleta = () => paletaApi.get("/");
export const getPaleta = (id) => paletaApi.get('/' + id + '/')
export const createPaleta = (paleta) => paletaApi.post("/", paleta);
export const deletePaleta = (id) => paletaApi.delete('/' + id)
export const updatePaleta = (id, paleta) => paletaApi.put('/' + id + '/', paleta)

//SCAN
const scanApi = axios.create({
  baseURL: "http://localhost:8000/descub/api/v1/scan/",
});

export const getAllScan = () => scanApi.get("/");
export const getScan= (id) => scanApi.get('/' + id + '/')
export const createScan = (scan) => scanApi.post("/", scan);
export const deleteScan = (id) => scanApi.delete('/' + id)
export const updateScan = (id, scan) => scanApi.put('/' + id + '/', scan)


 

