import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { UsuarioPage } from "./pages/UsuarioPage";
import { UsuarioFormPage } from "./pages/UsuarioFormPage";

import { MuralistaPage } from "./pages/MuralistaPage";
import { MuralistaFormPage } from "./pages/MuralistaFormPage";

import { MuralPage } from "./pages/MuralPage";
import { MuralFormPage } from "./pages/MuralFormPage";

import { ColorPage } from "./pages/ColorPage";
import { ColorFormPage } from "./pages/ColorFormPage";

import { PaletaPage } from "./pages/PaletaPage";
import { PaletaFormPage } from "./pages/PaletaFormPage";

import { ScanPage } from "./pages/ScanPage";
import { ScanFormPage } from "./pages/ScanFormPage";

import { Home } from "./pages/Home"


import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />

        <Routes>

          {/* HOME */}

          <Route path="/home" element={<Home></Home>}></Route>

          {/* USUARIO */}
          
          <Route path="/usuario" element={<UsuarioPage></UsuarioPage>}></Route>

          <Route
            path="/usuario-create"
            element={<UsuarioFormPage></UsuarioFormPage>}
          ></Route>

          <Route
            path="/usuario/:id"
            element={<UsuarioFormPage></UsuarioFormPage>}
          ></Route>

          {/* MURALISTA */}
          <Route path="/muralista" element={<MuralistaPage></MuralistaPage>}></Route>

          <Route
            path="/muralista-create"
            element={<MuralistaFormPage></MuralistaFormPage>}
          ></Route>

          <Route
            path="/muralista/:id"
            element={<MuralistaFormPage></MuralistaFormPage>}
          ></Route>

          {/* MURAL */}
          <Route path="/mural" element={<MuralPage></MuralPage>}></Route>

          <Route
            path="/mural-create"
            element={<MuralFormPage></MuralFormPage>}
          ></Route>

          <Route
            path="/mural/:id"
            element={<MuralFormPage></MuralFormPage>}
          ></Route>

          {/* COLOR */}
          <Route path="/color" element={<ColorPage></ColorPage>}></Route>

          <Route
            path="/color-create"
            element={<ColorFormPage></ColorFormPage>}
          ></Route>

          <Route
            path="/color/:id"
            element={<ColorFormPage></ColorFormPage>}
          ></Route>

          {/* PALETA */}
          <Route path="/paleta" element={<PaletaPage></PaletaPage>}></Route>

          <Route
            path="/paleta-create"
            element={<PaletaFormPage></PaletaFormPage>}
          ></Route>

          <Route
            path="/paleta/:id"
            element={<PaletaFormPage></PaletaFormPage>}
          ></Route>

          {/* SCAN */}
          <Route path="/scan" element={<ScanPage></ScanPage>}></Route>

          <Route
            path="/scan-create"
            element={<ScanFormPage></ScanFormPage>}
          ></Route>

          <Route
            path="/scan/:id"
            element={<ScanFormPage></ScanFormPage>}
          ></Route>

        </Routes>
        <Toaster></Toaster>
      </div>
    </BrowserRouter>
  );
}

export default App;
