import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState(null);

  const handleCalculate = (data) => {
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Header />
        <InputForm onCalculate={handleCalculate} />
        {result && <Result data={result} />}

        {/* Informações adicionais sobre IMC */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          <p>
            O IMC é uma medida internacional usada para calcular se uma pessoa
            está no peso ideal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
