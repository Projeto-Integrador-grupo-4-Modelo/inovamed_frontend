import React, { useEffect, useState } from "react";
import Consulta from "../../../models/Consulta";
import CardConsultas from "../cardconsultas/CardConsultas";
import { buscar } from "../../../service/Service";

interface ListaConsultaProps {
  consultasIniciais: Consulta[];
}

export function ListaConsulta({ consultasIniciais }: ListaConsultaProps) {
  const [consultas, setConsultas] = useState<Consulta[]>(consultasIniciais);

  const handleUpdate = (consultaAtualizada: Consulta) => {
    setConsultas((prevConsultas) =>
      prevConsultas.map((consulta) =>
        consulta.id === consultaAtualizada.id ? consultaAtualizada : consulta
      )
    );
  };

  const handleDelete = (id: number) => {
    setConsultas((prevConsultas) =>
      prevConsultas.filter((consulta) => consulta.id !== id)
    );
  };

  async function buscarConsultas() {
    await buscar("/", setConsultas
    );
  };

  useEffect(() => {
    buscarConsultas();
  }, [consultas.length]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h2 className="text-2xl font-sans text-teal-950 mb-6">Consultas Cadastradas</h2>
      <div className="space-y-6">
        {consultas.map((consulta) => (
          <CardConsultas
            key={consulta.id}
            consulta={consulta}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}
