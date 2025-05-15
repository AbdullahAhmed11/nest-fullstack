import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AppPage() {
  const { isAuthenticated, setAuthenticated } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuthenticated(false);
    navigate("/signin");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Unauthorized Access
          </h2>
          <p className="text-gray-600 mb-4">Please sign in to continue.</p>
          <button
            onClick={() => navigate("/signin")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Go to Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the Application
        </h1>
        <p className="text-gray-600 mb-6">You're successfully signed in.</p>
        <button
          onClick={logout}
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
