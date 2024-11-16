import { useSelector } from "react-redux";
import Navigation from "./Navigation/Navigator";
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import { selectUserDataIsLoggedIn } from "../../../redux/auth/slice";

export default function AppBar() {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
