import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Menu */}
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                location.pathname === "/"
                  ? "bg-white text-blue-500"
                  : "text-white hover:bg-blue-400"
              }`}
            >
              Home
            </Link>
            <Link
              to="/imc"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                location.pathname === "/imc"
                  ? "bg-white text-blue-500"
                  : "text-white hover:bg-blue-400"
              }`}
            >
              IMC
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
