import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  // Se não há usuário logado, redireciona para a página de login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Se há usuário logado, permite o acesso à página (children)
  return children;
};

export default PrivateRoute;
