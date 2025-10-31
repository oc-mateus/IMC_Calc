import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

// A URL da API que você criou (rodando no localhost:3001)
const API_URL = "http://localhost:3001/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // Para checagem inicial
  const navigate = useNavigate();

  // Efeito para carregar o usuário do localStorage ao iniciar a app
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // Termina a checagem
  }, []);

  // --- FUNÇÃO DE LOGIN ---
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Erro no login");
      }

      // Se o login deu certo, salva os dados no estado e no localStorage
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      // Redireciona para a calculadora
      navigate("/imc");
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  // --- FUNÇÃO DE CADASTRO ---
  const register = async (nome, email, password) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Erro no cadastro");
      }

      // A API já loga o usuário e retorna o token
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      // Redireciona para a calculadora
      navigate("/imc");
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  // --- FUNÇÃO DE LOGOUT ---
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    // Envia o usuário para a página de login
    navigate("/login");
  };

  // Não renderiza o app até que a checagem de auth esteja completa
  if (loading) {
    return null; // ou um spinner de loading
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
