import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  return (props) => {
    const isAuth = localStorage.getItem("auth") === "true";
    return isAuth ? <Component {...props} /> : <Navigate to="/login" />;
  };
};

export default withAuth;
