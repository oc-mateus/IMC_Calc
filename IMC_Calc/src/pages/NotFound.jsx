import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
          Página não encontrada
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Desculpe, a página que você está procurando não existe.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-base hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Voltar para a Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
