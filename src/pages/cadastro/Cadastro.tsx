import React, { useState } from "react";
import { User, Phone, Mail, MapPin, FileText, Heart } from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    address: "",
    hasInsurance: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .slice(0, 14);
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);
  };

  return (
    <div className="min-h-screen bpy-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-center text-[#29bda6] mb-8">
            Formulário de Cadastro
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-sm font-medium text-[#] mb-1">
                <User className="w-4 h-4 mr-2 text-[#29bda6]" />
                Nome
              </label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full px-4 py-2 border border-[#] rounded-md focus:ring-2 focus:ring-[#29bda6] focus:border-[#29bda6] transition-colors"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-[#] mb-1">
                <Mail className="w-4 h-4 mr-2 text-[#29bda6]" />
                Email
              </label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full px-4 py-2 border border-[#] rounded-md focus:ring-2 focus:ring-[#29bda6] focus:border-[#29bda6] transition-colors"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-[#] mb-1">
                <Phone className="w-4 h-4 mr-2 text-[#29bda6]" />
                Telefone
              </label>
              <input
                type="tel"
                placeholder="Digite seu telefone"
                className="w-full px-4 py-2 border border-[#] rounded-md focus:ring-2 focus:ring-[#] focus:border-[#29bda6] transition-colors"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: formatPhone(e.target.value),
                  })
                }
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-[#] mb-1">
                <FileText className="w-4 h-4 mr-2 text-[#29bda6]" />
                CPF
              </label>
              <input
                type="text"
                placeholder="Digite seu CPF"
                className="w-full px-4 py-2 border border-[#] rounded-md focus:ring-2 focus:ring-[#] focus:border-[#29bda6] transition-colors"
                value={formData.cpf}
                onChange={(e) =>
                  setFormData({ ...formData, cpf: formatCPF(e.target.value) })
                }
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-[#] mb-1">
                <MapPin className="w-4 h-4 mr-2 text-[#29bda6]" />
                Endereço
              </label>
              <input
                type="text"
                placeholder="Digite seu endereço"
                className="w-full px-4 py-2 border border-[#] rounded-md focus:ring-2 focus:ring-[#] focus:border-[#29bda6] transition-colors"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
              />
            </div>

            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-2 text-[#29bda6]" />
              <label className="text-sm font-medium text-[#]">
                Possui Convênio?
                <input
                  type="checkbox"
                  className="ml-2 h-4 w-4 text-[#29bda6] focus:ring-[#29bda6] border-[#29bda6] rounded"
                  checked={formData.hasInsurance}
                  onChange={(e) =>
                    setFormData({ ...formData, hasInsurance: e.target.checked })
                  }
                />
              </label>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-[#29bda6] text-white py-2 px-4 rounded-md hover:bg-[#278b7c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2"
              >
                Cadastrar
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    cpf: "",
                    address: "",
                    hasInsurance: false,
                  })
                }
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
