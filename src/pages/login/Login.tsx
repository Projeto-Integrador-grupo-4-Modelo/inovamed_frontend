import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../service/Service";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  useEffect(() => {
    if (formData.id !== 0) {
      retornar();
    }
  }, [formData]);

  function retornar() {
    setIsRegistering(false);
  }

  function atualizarEstadoCadastro(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === formData.senha && formData.senha.length >= 8) {
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, formData, setFormData);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setFormData({ ...formData, senha: "" });
      setConfirmaSenha("");
    }

    retornar();
  }

  const { usuario, handleLogin } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const token = usuario?.token;

  useEffect(() => {
    if (token !== "") {
      navigate("/dashboard");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="min-h-screen items-center  bg-gradient-to-b from-[#0D9488] via-[#0d9389] to-[#1C74c8] flex mt-0 justify-center">
      <div className="bg-[#ffffff] rounded-lg shadow-xl p-8 w-full max-w-md ">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight flex items-center">
            <img
              src="https://media.discordapp.net/attachments/1313593904657993831/1335246932192395376/LOGOTIPOedit2.PNG?ex=679f791c&is=679e279c&hm=ae3abcb2ada562179296d50fa218dd5af31b3df44380d236a432a3610ce3b31f&=&format=webp&quality=lossless"
              alt=""
              className="h-40 "
            />
          </h1>
        </div>

        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setIsRegistering(false)}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md ${
              !isRegistering
                ? "bg-[#0D9389] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsRegistering(true)}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md ${
              isRegistering
                ? "bg-teal-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Criar Conta
          </button>
        </div>

        {isRegistering ? (
          <form className="space-y-6" onSubmit={cadastrarNovoUsuario}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 pl-1">
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                className="w-full py-1 px-2 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="Digite seu nome completo"
                value={formData.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstadoCadastro(e)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 pl-1">
                Email
              </label>
              <input
                type="email"
                name="usuario"
                className="w-full py-1 px-2 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="seu@email.com"
                value={formData.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstadoCadastro(e)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 pl-1">
                Senha
              </label>
              <input
                type="password"
                name="senha"
                className="w-full py-1 px-2 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="Digite sua senha"
                value={formData.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstadoCadastro(e)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 pl-1 ">
                Confirmar Senha
              </label>
              <input
                type="password"
                name="confirmaSenha"
                className="w-full py-1 px-2 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="Confirme sua senha"
                value={confirmaSenha}
                onChange={handleConfirmarSenha}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 pl-1">
                Foto
              </label>
              <input
                type="text"
                name="foto"
                className="w-full py-1 px-2 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="Coloque uma foto"
                value={formData.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstadoCadastro(e)
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Criar Conta
            </button>
          </form>
        ) : (
          <form className="space-y-6" onSubmit={login}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 pl-1">
                Email
              </label>
              <input
                type="email"
                name="usuario"
                className="w-full py-1 px-2 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="seu@email.com"
                value={usuarioLogin.usuario}
                onChange={atualizarEstado}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 pl-1">
                Senha
              </label>
              <input
                type="password"
                name="senha"
                className="w-full py-1 px-2 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="Digite sua senha"
                value={usuarioLogin.senha}
                onChange={atualizarEstado}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Entrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
