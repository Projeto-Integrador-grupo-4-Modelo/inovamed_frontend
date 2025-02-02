import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import CardConsultas from '../cardconsultas/CardConsultas';
import { buscar } from '../../../service/Service';
import Consulta from '../../../models/Consulta';


function ListaConsultas() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [consultas, setConsultas] = useState<Consulta[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchConsultas = async () => {
            setLoading(true);
            setError('');

            try {
                const data = await buscar(); // Chama a função do serviço
                setConsultas(data);
            } catch (err) {
                setError('Erro ao carregar as consultas.');
            } finally {
                setLoading(false);
            }
        };

        fetchConsultas();
    }, []);

    const handleDelete = (id: string) => {
        setConsultas((prevConsultas) => prevConsultas.filter((consulta) => consulta.id !== id));
    };

    const handleUpdate = (updatedConsulta: Consulta) => {
        setConsultas((prevConsultas) =>
            prevConsultas.map((consulta) =>
                consulta.id === updatedConsulta.id ? updatedConsulta : consulta
            )
        );
    };

    const filteredConsultas = consultas.filter((consulta) =>
        consulta.especialidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consulta.queixa.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consulta.medicoResponsavel.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-4 max-w-6xl mx-auto px-4">
            {/* Search and filters */}
            <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Buscar consulta..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                </div>

                <button
                    onClick={() => setFilterOpen(!filterOpen)}
                    className="mt-2 flex items-center text-sm text-gray-600 hover:text-gray-800"
                >
                    <ChevronDown className={`w-4 h-4 mr-1 transform ${filterOpen ? 'rotate-180' : ''}`} />
                    Filtros
                </button>

                {filterOpen && (
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                        <select className="rounded-md border-gray-300 text-sm">
                            <option>Todos os status</option>
                            <option>Confirmada</option>
                            <option>Cancelada</option>
                            <option>Concluída</option>
                            <option>Em andamento</option>
                        </select>
                        <select className="rounded-md border-gray-300 text-sm">
                            <option>Todos os médicos</option>
                            <option>Dr. João Silva</option>
                            <option>Dra. Ana Costa</option>
                            <option>Dr. Pedro Lima</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Loading state */}
            {loading && <div>Carregando...</div>}
            {error && <div className="text-red-500">{error}</div>}

            {/* Consulta list - 3 colunas */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {filteredConsultas.map((consulta) => (
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

export default ListaConsultas;