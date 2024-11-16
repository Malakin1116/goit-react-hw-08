import { useSelector } from "react-redux";
import Navigation from "./Navigation/Navigator";
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import { selectUserDataIsLoggedIn } from "../../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <header>
      <nav>
        <ul>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </ul>
      </nav>
    </header>
  );
}
