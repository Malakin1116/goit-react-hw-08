import { useSelector } from "react-redux";
import {
  selectUserDataIsLoggedIn,
  selectUserDataIsRefreshing,
} from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  const isRefreshing = useSelector(selectUserDataIsRefreshing);

  if (isRefreshing) {
    return <div>Checking authorization...</div>;
  }

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
