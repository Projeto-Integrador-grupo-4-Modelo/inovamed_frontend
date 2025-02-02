import React from 'react';
import Cliente from '../../../models/Cliente';
import { CardPaciente } from '../cardpaciente/CardPaciente';

interface ListaPacienteProps {
  paciente: Cliente[];
  onDelete: (id: number) => void;
  onUpdate: (paciente: Cliente) => void;
}

export function ListaPaciente({ paciente, onDelete, onUpdate }: ListaPacienteProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h2 className="text-2xl font-sans text-teal-950 mb-6">Pacientes Cadastrados</h2>
      <div className="space-y-6">
        {paciente.map((paciente) => (
          <CardPaciente
            key={paciente.id}
            paciente={paciente}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
}