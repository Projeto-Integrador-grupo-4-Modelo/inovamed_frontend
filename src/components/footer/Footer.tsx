import {
  Facebook,
  Instagram,
  Youtube,
  Github,
  Link,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";

function Footer() {
  return <>{component}</>;
}

const component = (
  <footer className="bg-[#0D9389] border-t -mt-0.5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-9 items-center">
      <div className="flex justify-center items-center mb-4">
        <img
          src="https://media.discordapp.net/attachments/1311370458414841927/1335635408289140908/Design_sem_nome_5.webp?ex=67a0e2e8&is=679f9168&hm=640fc6fd38f162bc770e15fc19908162387aa2ae587064b9d6dd39acc9108709&=&format=webp"
          alt="Primeira Imagem"
          className="w-64 h-auto"
        />
      </div>
      <div className="border-t border-white-500 mb-8"></div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-2" />
                <span>contato@InovaMed.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-[#00C49A] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cadastro"
                  className="text-white hover:text-[#00C49A] transition-colors"
                >
                  Cadastro
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-white hover:text-[#00C49A] transition-colors"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <Github className="h-10 w-8 text-white hover:text-[#00C49A] transition-colors" />
              <Youtube className="h-10 w-8 text-white hover:text-[#00C49A] transition-colors" />
              <Facebook className="h-10 w-8 text-white hover:text-[#00C49A] transition-colors" />
              <Instagram className="h-10 w-8 text-white hover:text-[#00C49A] transition-colors" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t text-center text-white">
        <p>&copy; Copyright 2025 InovaMed CRM. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
