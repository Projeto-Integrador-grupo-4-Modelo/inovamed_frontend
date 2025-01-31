<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
=======
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; // Importação correta
import Sidebar from "./components/sidebar/Sidebar";
import Patients from "./pages/Patients";
import CalendarPage from "./pages/Calendar";
import RegisterPatient from "./pages/RegisterPatients";
import Exams from "./pages/Exams";
import Messages from "./pages/Messages";

function App() {
  const [currentView, setCurrentView] = useState<string>("patients");

  const handleNavigate = (
    view: "patients" | "calendar" | "register" | "exams" | "messages"
  ) => {
    setCurrentView(view);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar onNavigate={handleNavigate} currentView={currentView} />

        <div className="flex-1 p-6">
          <switch>
            {" "}
            {/* Correção da tag */}
            <Route path="/patients" Component={Patients} />
            <Route path="/calendar" Component={CalendarPage} />
            <Route path="/register" Component={RegisterPatient} />
            <Route path="/exams" Component={Exams} />
            <Route path="/messages" Component={Messages} />
          </switch>
        </div>
      </div>
    </Router>
  );
}

>>>>>>> ee3f85137a65a5e1130164d093bae7c751f7b7f2
export default App;
