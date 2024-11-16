import { useSelector } from "react-redux";
import { selectUserDataIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

export default RestrictedRoute;
