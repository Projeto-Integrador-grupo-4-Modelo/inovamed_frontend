import React, { useState } from "react";
import {
  Stethoscope,
  MessageCircle,
  Calendar,
  User,
  Activity,
  Users,
} from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    specialty: "",
    complaint: "",
    date: "",
    doctor: "",
    status: "Pendente",
    client: "",
    user: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const clients = ["João Silva", "Maria Santos", "Pedro Oliveira", "Ana Costa"];

  const users = [
    "Dr. Carlos Santos",
    "Dra. Amanda Lima",
    "Dr. Roberto Souza",
    "Dra. Patricia Costa",
  ];

  const formatDate = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .slice(0, 10);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment data:", formData);
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 py-10">
          <h2 className="text-3xl font-bold text-center text-[#29bda6] mb-8">
            Cadastrar Consulta
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm font-medium text-[#] mb-1">
                  <Stethoscope className="w-4 h-4 mr-2 text-[#29bda6]" />
                  Especialidade
                </label>
                <input
                  type="text"
                  placeholder="Digite a especialidade"
                  className="w-full px-4 py-2 border border-[#] rounded-md focus:ring-2 focus:ring-[#] focus:border-[#] transition-colors"
                  value={formData.specialty}
                  onChange={(e) =>
                    setFormData({ ...formData, specialty: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-[#] mb-1">
                  <Calendar className="w-4 h-4 mr-2 text-[#29bda6]" />
                  Data
                </label>
                <input
                  type="text"
                  placeholder="dd/mm/aaaa"
                  className="w-full px-4 py-2 border border-[#] rounded-md focus:ring-2 focus:ring-[#] focus:border-[#] transition-colors"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      date: formatDate(e.target.value),
                    })
                  }
                  required
                />
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-[#] mb-1">
                <MessageCircle className="w-4 h-4 mr-2 text-[#29bda6]" />
                Queixa
              </label>
              <textarea
                placeholder="Digite a queixa do paciente"
                className="w-full px-4 py-2 border border-[#] rounded-md focus:ring-2 focus:ring-[#29bda6] focus:border-[#29bda6] transition-colors h-32 resize-none"
                value={formData.complaint}
                onChange={(e) =>
                  setFormData({ ...formData, complaint: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-[#] mb-1">
                <User className="w-4 h-4 mr-2 text-[#29bda6]" />
                Médico Responsável
              </label>
              <input
                type="text"
                placeholder="Digite o nome do médico responsável"
                className="w-full px-4 py-2 border border-[#] rounded-md focus:ring-2 focus:ring-[#] focus:border-[#] transition-colors"
                value={formData.doctor}
                onChange={(e) =>
                  setFormData({ ...formData, doctor: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm font-medium text-[#] mb-1">
                  <Activity className="w-4 h-4 mr-2 text-[#29bda6]" />
                  Status
                </label>
                <select
                  className="w-full px-4 py-2 border border-[#] rounded-md focus:ring-2 focus:ring-[#] focus:border-[#] transition-colors bg-[#]"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  required
                >
                  <option value="Pendente">Pendente</option>
                  <option value="Confirmada">Confirmada</option>
                  <option value="Cancelada">Cancelada</option>
                  <option value="Realizada">Realizada</option>
                </select>
              </div>
            </div>
            <div className="relative">
              <label className="flex items-center text-sm font-medium text-[#] mb-1">
                <Users className="w-4 h-4 mr-2 text-[#29bda6]" />
                Usuário
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-white relative z-10"
                value={formData.user}
                onChange={(e) =>
                  setFormData({ ...formData, user: e.target.value })
                }
                required
              >
                <option value="">Selecione o Usuário</option>
                {users.map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#29bda6] text-[#ffffff] py-3 px-4 rounded-md hover:bg-[#278b7c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 text-lg font-medium"
              >
                Cadastrar Consulta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
