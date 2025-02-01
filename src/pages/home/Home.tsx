import { ArrowRight } from "lucide-react";
import Carrossel from "./Carrossel";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-teal-600">
                  Inova Med
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <button className="text-teal-600 px-4 py-2 rounded-lg hover:text-teal-800 transition-colors">
                  <span>Sobre</span>
                </button>
                <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2">
                  <span>Acessar Sistema</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <Carrossel />
      </div>
    </>
  );
}

export default Home;
