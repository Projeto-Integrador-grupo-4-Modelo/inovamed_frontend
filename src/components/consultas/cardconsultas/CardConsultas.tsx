import React from 'react';
import { Calendar, User, ClipboardList, CheckCircle, XCircle, Clock, Trash2, Edit } from 'lucide-react';
import Consulta from '../../../models/Consulta';

interface CardConsultaProps {
    consulta: Consulta;
    onDelete: (id: string) => void; // Função para deletar
    onUpdate: (consulta: Consulta) => void; // Função para atualizar
}

function CardConsultas({ consulta, onDelete, onUpdate }: CardConsultaProps) {
    const getStatusIcon = () => {
        switch (consulta.status) {
            case 'Confirmada':
                return <CheckCircle className="w-5 h-5 text-green-600 mr-2" />;
            case 'Cancelada':
                return <XCircle className="w-5 h-5 text-red-600 mr-2" />;
            case 'Concluída':
                return <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />;
            case 'Em andamento':
                return <Clock className="w-5 h-5 text-yellow-600 mr-2" />;
            default:
                return <XCircle className="w-5 h-5 text-gray-600 mr-2" />;
        }
    };

    const getStatusClass = () => {
        switch (consulta.status) {
            case 'Confirmada':
                return 'text-green-600';
            case 'Cancelada':
                return 'text-red-600';
            case 'Concluída':
                return 'text-blue-600';
            case 'Em andamento':
                return 'text-yellow-600';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div className="flex flex-auto gap-2">
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200 w-[30%]">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900 text-lg">{consulta.especialidade}</h3>
                    <div className="flex space-x-3">
                        <button
                            onClick={() => onUpdate(consulta)}
                            className="text-blue-600 hover:text-blue-800 flex items-center"
                        >
                            <Edit className="w-5 h-5 mr-1" />
                        </button>
                        <button
                            onClick={() => onDelete(consulta.id)}
                            className="text-red-600 hover:text-red-800 flex items-center"
                        >
                            <Trash2 className="w-5 h-5 mr-1" />
                        </button>
                    </div>
                </div>

                <div className="text-sm text-gray-700">
                    <div className="flex items-center mb-1">
                        <ClipboardList className="w-4 h-4 mr-2 text-blue-500" />
                        <span><strong>Queixa:</strong> {consulta.queixa}</span>
                    </div>
                    <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2 text-green-500" />
                        <span><strong>Data:</strong> {consulta.data}</span>
                    </div>
                    <div className="flex items-center mb-1">
                        <User className="w-4 h-4 mr-2 text-purple-500" />
                        <span><strong>Médico Responsável:</strong> {consulta.medicoResponsavel}</span>
                    </div>
                </div>

                <div className={`mt-3 text-sm font-semibold flex items-center space-x-2 ${getStatusClass()}`}>
                    {getStatusIcon()}
                    {consulta.status}
                </div>
            </div>

            {/* Adicione outros cards aqui */}
        </div>
    );
}

export default CardConsultas;