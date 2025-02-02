import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  LogOut,
  UserPlus,
  CalendarPlus,
  LayoutDashboard,
  User,
} from "lucide-react";

export function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    { icon: CalendarPlus, label: "Agenda", path: "#" },
    {
      icon: Calendar,
      label: "Cadastro de Consulta",
      path: "/consulta",
    },
    {
      icon: UserPlus,
      label: "Cadastro de Paciente",
      path: "/dashboard/paciente",
    },
    {
      icon: User,
      label: "Pacientes",
      path: "#",
    },
  ];

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-[#0D9488] via-[#0d9389] to-[#1C74c8] text-white flex flex-col shadow-xl p-6">
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <img
            src="https://media.discordapp.net/attachments/1313593904657993831/1334958256157888593/Design_sem_nome_5.png?ex=679e6c42&is=679d1ac2&hm=05c05dcce52ff7a6905f1ec287affb096edb7340174733ef9ecbb8fa542b431f&=&format=webp&quality=lossless&width=614&height=385"
            alt=""
            className="h-20"
          />
        </h1>
        <p className="text-sm text-white/80 mt-1">Centro Médico Inovador</p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
              >
                <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer/Logout Section */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-white/10 transition-colors duration-200 group"
        >
          <LogOut className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </div>
  );
}
