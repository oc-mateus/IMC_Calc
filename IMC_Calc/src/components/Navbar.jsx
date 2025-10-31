import React, { useContext } from "react"; // Adicionado o useContext
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext"; // Importado o AuthContext

function Navbar() {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext); // Hook para pegar o usuário e a função de logout

  // Função para pegar o estilo do link, do seu código original
  const getLinkClass = (path) => {
    return `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
      location.pathname === path
        ? "bg-white text-blue-500" // Seu estilo de link ativo
        : "text-white hover:bg-blue-400" // Seu estilo de link inativo
    }`;
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (Seu design original) */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m-6 4h6m-6 4h6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">Saúde Total</span>
          </Link>

          {/* Menu (Seu design + lógica) */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-4">
              <Link to="/" className={getLinkClass("/")}>
                Home
              </Link>
              <Link to="/imc" className={getLinkClass("/imc")}>
                IMC
              </Link>
            </div>

            {/* --- LÓGICA DE AUTENTICAÇÃO ADICIONADA AQUI --- */}
            {user ? (
              // Se o usuário ESTIVER logado
              <>
                <span className="text-white hidden sm:block font-medium">
                  Olá, {user.nome}!
                </span>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors duration-300 text-sm"
                >
                  Sair
                </button>
              </>
            ) : (
              // Se o usuário NÃO ESTIVER logado
              <>
                <Link
                  to="/login"
                  className="text-white hover:bg-blue-400 px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  // Botão de cadastro com mais destaque, usando seu estilo de "link ativo"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 text-sm shadow"
                >
                  Cadastrar
                </Link>
              </>
            )}
            {/* --- FIM DA LÓGICA DE AUTENTICAÇÃO --- */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
