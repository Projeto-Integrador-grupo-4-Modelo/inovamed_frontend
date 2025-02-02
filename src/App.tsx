import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import FormConsulta from "./components/consultas/formconsultas/FormConsultas";
import FormPaciente from "./components/paciente/formpaciente/FormPaciente";
import { Dashboard } from "./pages/dashboard/Dashboard";
import PaginaDashboardBase from "./pages/paginadashboardbase/PaginaDashboardBase";
import Login from "./pages/login/Login";
import { AuthProvider } from "./context/AuthContext";
import { ListaPaciente } from "./components/paciente/listapaciente/ListaPaciente";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PaginaDashboardBase />}>
            <Route path="consulta" element={<FormConsulta />} />
            <Route path="cadastro-paciente" element={<FormPaciente />} />
            <Route path="pacientes" element={<ListaPaciente />} />
            <Route path="" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
