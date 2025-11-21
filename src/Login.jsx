import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  };

  return (
    <div>
      <h2>🔑 Login Page</h2>
      <p>Please log in to access your profile.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
