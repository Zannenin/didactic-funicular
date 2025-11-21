import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import withAuth from "./hoc/withAuth";
import "./App.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <button onClick={handleLogout} style={{ marginLeft: "auto" }}>Logout</button>
    </nav>
  );
}

function App() {
  const ProtectedProfile = withAuth(Profile);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProtectedProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
