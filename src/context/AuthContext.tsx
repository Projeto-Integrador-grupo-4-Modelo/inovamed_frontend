import { createContext, ReactNode, useState, useEffect } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../service/Service";
import toast from "react-hot-toast";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
    // Recupera os dados do Local Storage, se existirem
    const storedUser = localStorage.getItem("usuario");
    return storedUser
      ? JSON.parse(storedUser)
      : {
          id: 0,
          nome: "",
          usuario: "",
          senha: "",
          foto: "",
          token: "",
        };
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, usuarioLogin, (user: UsuarioLogin) => {
        setUsuario(user);
        // Salva os dados do usuário no Local Storage
        localStorage.setItem("usuario", JSON.stringify(user));
      });
      toast.success("Usuário foi autenticado com sucesso!");
    } catch (error) {
      toast.error("Os dados do Usuário estão inconsistentes!");
    }
    setIsLoading(false);
  }

  function handleLogout() {
    // Limpa os dados do estado e do Local Storage
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
    localStorage.removeItem("usuario");
    toast.success("Usuário deslogado com sucesso!");
  }

  useEffect(() => {
    // Recupera o usuário ao montar o componente
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
