function Result({ data }) {
  const { weight, height } = data;
  const imc = weight / (height * height);
  let classification = "";
  let colorClass = "";
  let bgColorClass = "";
  let icon = "";

  if (imc < 18.5) {
    classification = "Abaixo do peso";
    colorClass = "text-yellow-700";
    bgColorClass = "bg-yellow-100";
    icon = "⚠️";
  } else if (imc >= 18.5 && imc <= 24.9) {
    classification = "Peso normal";
    colorClass = "text-green-700";
    bgColorClass = "bg-green-100";
    icon = "✅";
  } else if (imc >= 25.0 && imc <= 29.9) {
    classification = "Sobrepeso";
    colorClass = "text-orange-700";
    bgColorClass = "bg-orange-100";
    icon = "⚠️";
  } else {
    classification = "Obesidade";
    colorClass = "text-red-700";
    bgColorClass = "bg-red-100";
    icon = "❌";
  }

  // Função para obter a descrição com base na classificação
  const getDescription = () => {
    switch (classification) {
      case "Abaixo do peso":
        return "Seu IMC está abaixo do recomendado. Considere buscar orientação nutricional.";
      case "Peso normal":
        return "Parabéns! Seu IMC está dentro da faixa considerada saudável.";
      case "Sobrepeso":
        return "Seu IMC indica sobrepeso. Atenção à alimentação e prática de exercícios.";
      case "Obesidade":
        return "Seu IMC indica obesidade. É recomendado buscar orientação médica.";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mt-8 animate-fade-in">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Resultado do Seu IMC
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-gray-600">Peso:</p>
          <p className="font-medium text-xl">{weight} kg</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-gray-600">Altura:</p>
          <p className="font-medium text-xl">{height} m</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600 text-lg">Seu IMC é:</p>
          <div
            className={`px-4 py-1 rounded-full ${bgColorClass} ${colorClass} font-semibold`}
          >
            {icon} {classification}
          </div>
        </div>

        <div className="text-center py-6">
          <span className="text-5xl font-bold text-blue-600">
            {imc.toFixed(1)}
          </span>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div
              className={`h-4 rounded-full ${
                imc < 18.5
                  ? "bg-yellow-500"
                  : imc < 25
                  ? "bg-green-500"
                  : imc < 30
                  ? "bg-orange-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${Math.min(100, (imc / 40) * 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>16</span>
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
            <span>40+</span>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl mt-4">
          <p className="text-blue-800">
            <span className="font-semibold">{getDescription()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Result;
