import { useDispatch, useSelector } from "react-redux";
import { apiLogoutUser } from "../../../../redux/auth/operations";
import { selectUserData } from "../../../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { NavLink } from "react-router-dom";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData) || {};

  const onLogout = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <li className={css.userMenu}>
      <span className={css.greeting}>Hello, {userData.name || "Guest"}</span>
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
