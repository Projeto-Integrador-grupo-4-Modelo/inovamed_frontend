// import React from 'react';
// import CardConsultas from './components/consultas/cardconsultas/CardConsultas';
// import ListaConsultas from './components/consultas/listaconsultas/ListaConsultas';

// function App() {

//   // const consulta1 = {
//   //   id: 1,
//   //   especialidade: "Cardiologia",
//   //   queixa: "Dor no peito",
//   //   data: "2025-02-01",
//   //   medicoResponsavel: "Dr. João Silva",
//   //   status: "Confirmada",
//   // };

//   // const consulta2 = {
//   //   id: 2,
//   //   especialidade: "Neurologia",
//   //   queixa: "Dor de cabeça constante",
//   //   data: "2025-02-05",
//   //   medicoResponsavel: "Dra. Ana Costa",
//   //   status: "Em andamento",
//   // };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 space-y-6">
//       {/* Exibindo os dois cards */}
//       {/* <ListaConsultas /> */}
//       {/* <CardConsultas consulta={consulta1} />  */}
//        {/* <CardConsultas consulta={consulta2} /> */}
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/sobre" element={<About />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
