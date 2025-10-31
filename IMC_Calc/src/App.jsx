import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// --- CORREÇÃO AQUI ---
import { AuthProvider } from "../contexts/authcontext.jsx";

// Componentes e Páginas
import Navbar from "./components/Navbar";
import PrivateRoute from "./pages/PrivateRoute";
import Home from "./pages/Home";
import ImcCalculator from "./pages/ImcCalculator";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      {/* O AuthProvider envolve todo o app, 
          dando ao Navbar e às Rotas acesso ao estado de login */}
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Rota Privada */}
            <Route
              path="/imc"
              element={
                <PrivateRoute>
                  <ImcCalculator />
                </PrivateRoute>
              }
            />

            {/* Rota de "Não Encontrado" */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
