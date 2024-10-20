// AppRoute.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

// Componentes das páginas
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import SobreMim from "./pages/SobreMim";
import Curriculo from "./pages/Curriculo";
import Contato from "./pages/Contato";


// Definindo o componente de rotas
const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mim" element={<SobreMim />} />
      <Route path="/Projetos" element={<Projetos />} />
      <Route path="/curriculo" element={<Curriculo />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
};

export default AppRoute;


