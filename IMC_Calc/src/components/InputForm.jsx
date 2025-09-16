import { useState } from "react";

function InputForm({ onCalculate }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  // Função para formatar o peso (kg)
  const formatWeight = (value) => {
    let cleaned = value.replace(/[^\d.]/g, "");
    const parts = cleaned.split(".");

    if (parts.length > 2) {
      cleaned = parts[0] + "." + parts.slice(1).join("");
    }

    if (parts.length === 2) {
      if (parts[0].length > 3) parts[0] = parts[0].slice(0, 3);
      if (parts[1].length > 1) parts[1] = parts[1].slice(0, 1);
      cleaned = parts[0] + "." + parts[1];
    } else if (parts[0].length > 3) {
      cleaned = parts[0].slice(0, 3);
    }

    return cleaned;
  };

  // Função para formatar a altura (m)
  const formatHeight = (value) => {
    let cleaned = value.replace(/[^\d.]/g, "");
    const parts = cleaned.split(".");

    if (parts.length > 2) {
      cleaned = parts[0] + "." + parts.slice(1).join("");
    }

    if (parts.length === 2) {
      if (parts[0].length > 1) parts[0] = parts[0].slice(0, 1);
      if (parts[1].length > 2) parts[1] = parts[1].slice(0, 2);
      cleaned = parts[0] + "." + parts[1];
    } else if (parts[0].length > 1) {
      cleaned = parts[0].slice(0, 1);
    }

    return cleaned;
  };

  const handleWeightChange = (e) => {
    const formattedValue = formatWeight(e.target.value);
    setWeight(formattedValue);
  };

  const handleHeightChange = (e) => {
    const formattedValue = formatHeight(e.target.value);
    setHeight(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (weight && height) {
      onCalculate({
        weight: parseFloat(weight),
        height: parseFloat(height),
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
    >
      <div className="mb-6">
        <label
          htmlFor="weight"
          className="block text-gray-700 font-medium mb-3 text-lg"
        >
          Peso
        </label>
        <div className="relative">
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={handleWeightChange}
            className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 pr-16 text-lg shadow-sm"
            placeholder="Ex: 70.5"
            inputMode="decimal"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
            <span className="text-gray-500 font-medium">kg</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2 ml-1">
          Digite o peso em kilogramas
        </p>
      </div>

      <div className="mb-8">
        <label
          htmlFor="height"
          className="block text-gray-700 font-medium mb-3 text-lg"
        >
          Altura
        </label>
        <div className="relative">
          <input
            type="text"
            id="height"
            value={height}
            onChange={handleHeightChange}
            className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 pr-16 text-lg shadow-sm"
            placeholder="Ex: 1.75"
            inputMode="decimal"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
            <span className="text-gray-500 font-medium">m</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2 ml-1">
          Digite a altura em metros
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg font-bold text-lg"
      >
        Calcular IMC
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}
export default InputForm;
