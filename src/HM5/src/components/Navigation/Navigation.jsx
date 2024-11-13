import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";

import {
  selectUserDataIsLoggedIn,
  selectUserData,
} from "../../../../redux/auth/slice";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  const userData = useSelector(selectUserData);

  return (
    <ul className={css.ul}>
      <li className={css.li}>
        <NavLink to="/" className={getNavLinkClass}>
          HomePages
        </NavLink>
      </li>
      {isLoggedIn ? (
        <li className={css.li}>
          <span>Hello, {userData.name}</span>
        </li>
      ) : (
        <li className={css.li}>
          <NavLink to="/signup" className={getNavLinkClass}>
            SignUp
          </NavLink>
        </li>
      )}

      <li className={css.li}>
        <NavLink to="/login" className={getNavLinkClass}>
          SignIn
        </NavLink>
      </li>
    </ul>
  );
}
