import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.auth.user.name);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <li className={css.userMenu}>
      <span className={css.greeting}>Hello {userName || "Guest"}</span>
      <button onClick={onLogout} className={css.logoutButton}>
        Logout
      </button>
    </li>
  );
}
