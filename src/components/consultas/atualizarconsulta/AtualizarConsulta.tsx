import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Consulta from "../../../models/Consulta";

interface AtualizarConsultaModalProps {
    consulta: Consulta;
    isOpen: boolean;
    onClose: () => void;
    onUpdate: (consultaAtualizada: Consulta) => void;
}

export function AtualizarConsultaModal({ consulta, isOpen, onClose, onUpdate }: AtualizarConsultaModalProps) {
    const [formData, setFormData] = useState<Omit<Consulta, "id" | "cliente">>({
        especialidade: "",
        queixa: "",
        data: "",
        medicoResponsavel: "",
        status: "",
    });

    useEffect(() => {
        if (isOpen) {
            setFormData({
                especialidade: consulta.especialidade,
                queixa: consulta.queixa,
                data: consulta.data,
                medicoResponsavel: consulta.medicoResponsavel,
                status: consulta.status,
            });
        }
    }, [isOpen, consulta]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate({ ...consulta, ...formData });
        onClose(); 
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">Atualizar Consulta</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {["especialidade", "queixa", "data"].map((field) => (
                        <div key={field}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{field}</label>
                            <input
                                type={field === "data" ? "date" : "text"}
                                value={formData[field as keyof typeof formData]}
                                onChange={(e) => setFormData((prev) => ({ ...prev, [field]: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600"
                                required
                            />
                        </div>
                    ))}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Médico Responsável</label>
                        <select
                            value={formData.medicoResponsavel}
                            onChange={(e) => setFormData((prev) => ({ ...prev, medicoResponsavel: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600"
                            required
                        >
                            <option value="">Selecione o médico</option>
                            <option value="Dr. Silva">Dr. Silva</option>
                            <option value="Dr. Costa">Dr. Costa</option>
                            <option value="Dr. Almeida">Dr. Almeida</option>
                        </select>
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                            value={formData.status}
                            onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600"
                            required
                        >
                            <option value="">Selecione o status</option>
                            <option value="Confirmada">Confirmada</option>
                            <option value="Em andamento">Em andamento</option>
                            <option value="Cancelada">Cancelada</option>
                            <option value="Concluída">Concluída</option>
                        </select>
                    </div>

                    <div className="flex justify-end space-x-3 mt-6">
                        <button type="button" onClick={onClose} className="btn-gray">Cancelar</button>
                        <button type="submit" className="btn-teal">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
