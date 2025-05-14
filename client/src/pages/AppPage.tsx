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
    return <p className="text-center mt-10">Unauthorized. Please sign in.</p>;
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the application.</h1>
      <button className="btn" onClick={logout}>Logout</button>
    </div>
  );
}
