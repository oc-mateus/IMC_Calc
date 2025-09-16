export default function Header() {
  return (
    <header className="text-center mb-10">
      <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
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
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Calculadora de IMC
      </h1>
      <p className="text-gray-600 mt-3 max-w-md mx-auto">
        Calcule seu Índice de Massa Corporal e descubra sua classificação
      </p>
    </header>
  );
}

