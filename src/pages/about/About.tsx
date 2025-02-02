import { Target, Heart, Award, ArrowUpLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ModalBianca from "./ModalBianca";
import ModalKemilly from "./ModalKemilly";
import ModalPriscila from "./ModalPriscila";
import ModalBruna from "./ModalBruna";
import ModalVitor from "./ModalVitor";
import ModalRubio from "./ModalRubio";
import ModalGuilherme from "./ModalGuilherme";
import ModalVictoria from "./ModalVictoria";

function About() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Redireciona para a Home
  };

  return (
    <div>
      {/* Botão Flutuante */}
      <button
        onClick={handleBackToHome}
        className="fixed bottom-6 right-6 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-110"
        aria-label="Voltar para Home"
      >
        <ArrowUpLeft className="w-6 h-6" />
      </button>

      <section className="relative bg-gradient-to-r from-[#0D9488] via-[#1C74C8] to-[#0D9389] py-20">
        <div className="absolute inset-0">
          <img
            src="https://i.imgur.com/FCT3t42.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-center bg-opacity-70 p-6">
            <h1 className="text-5xl font-bold text-[#42f8e2] mb-6">
              Sobre Nós
            </h1>
            <p className="text-2xl text-white max-w-3xl font-semibold">
              A InovaMed se dedica a oferecer o melhor em cuidados médicos,
              combinando excelência profissional com atendimento humanizado.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0D9488] via-[#1C74C8] to-[#0D9389] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-16 text-center text-white">
          <div className="flex-1 min-w-[300px] hover:scale-105 transition-transform duration-300">
            <Target className="h-12 w-12 text-[#42f8e2] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Missão</h3>
            <p>
              Proporcionar atendimento médico de excelência, priorizando o
              bem-estar e a saúde integral dos nossos pacientes.
            </p>
          </div>
          <div className="flex-1 min-w-[300px] hover:scale-105 transition-transform duration-300">
            <Heart className="h-12 w-12 text-[#42f8e2] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Valores</h3>
            <p>
              Ética, compromisso, inovação, humanização e excelência em tudo que
              fazemos.
            </p>
          </div>
          <div className="flex-1 min-w-[300px] hover:scale-105 transition-transform duration-300">
            <Award className="h-12 w-12 text-[#42f8e2] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Visão</h3>
            <p>
              Ser referência em atendimento médico humanizado, inovando
              constantemente em práticas e tecnologias para o cuidado da saúde.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0D9488] via-[#1C74C8] to-[#0D9389] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#42f8e2] mb-12">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <ModalBianca />
              <h3 className="text-xl font-semibold">Bianca Jesus</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center text-white">
              <ModalKemilly />
              <h3 className="text-xl font-semibold">Kemilly Fagundes</h3>
              <p className="text-gray-400">Product Owner</p>
            </div>
            <div className="text-center text-white">
              <ModalPriscila />
              <h3 className="text-xl font-semibold">Priscila Santos</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center text-white">
              <ModalBruna />
              <h3 className="text-xl font-semibold">Bruna Bosco</h3>
              <p className="text-gray-400">Tester</p>
            </div>
            <div className="text-center text-white">
              <ModalVitor />
              <h3 className="text-xl font-semibold">Vitor Cavalcante</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center text-white">
              <ModalRubio />
              <h3 className="text-xl font-semibold">Rubio Dainton</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center text-white">
              <ModalGuilherme />
              <h3 className="text-xl font-semibold">Guilherme Lima</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center text-white">
              <ModalVictoria />
              <h3 className="text-xl font-semibold">Victória Lara</h3>
              <p className="text-gray-400">Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
