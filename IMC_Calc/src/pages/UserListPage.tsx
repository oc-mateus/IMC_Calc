import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext";

const UserListPage = () => {
  const { users } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Lista de Usuários Cadastrados</h1>
      <button onClick={() => navigate("/calculator")}>
        Voltar para Calculadora
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Nome:</strong> {user.name} - <strong>Email:</strong>
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListPage;
