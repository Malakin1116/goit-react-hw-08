import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { NavLink } from "react-router-dom";

export default function UserMenu() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <li className={css.userMenu}>
      <span className={css.greeting}>Hello </span>
      <button onClick={onLogout} className={css.logoutButton}>
        Logout
      </button>

      <ul className={css.ul}>
        <li className={css.li}>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </li>
  );
}
