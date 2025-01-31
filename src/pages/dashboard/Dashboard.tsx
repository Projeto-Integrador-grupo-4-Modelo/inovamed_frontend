import React from "react";
import { Activity, Users, Calendar, FileText } from "lucide-react";

export function Dashboard() {
  const stats = [
    { icon: Users, label: "Pacientes Ativos", value: "2,847" },
    { icon: Calendar, label: "Consultas Hoje", value: "42" },
    { icon: Activity, label: "Exames Pendentes", value: "156" },
    { icon: FileText, label: "Prontuários", value: "3,298" },
  ];

  return (
    <main className="flex-1 bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">
          Bem-vindo ao InovaMed
        </h2>
        <p className="mt-2 text-gray-600">Painel de controle e estatísticas</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <stat.icon className="h-8 w-8 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Atividades Recentes
          </h3>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Nova consulta agendada
                      </p>
                      <p className="text-sm text-gray-500">
                        Dr. Silva - Cardiologia
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">Há 2 horas</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
