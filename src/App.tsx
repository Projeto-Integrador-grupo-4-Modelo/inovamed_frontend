import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Dashboard } from "./pages/dashboard/Dashboard";
import CadastroConsulta from "./pages/cadastro/CadastroConsulta";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/cadastro-consulta" element={<CadastroConsulta />} />
            <Route path="/cadastro-paciente" element={<Cadastro />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
