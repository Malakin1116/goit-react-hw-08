import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const getNavLinkClass = ({ isActive }) =>
  clsx(css.link, isActive && css.isActive);

export default function AuthNav() {
  return (
    <>
      <li className={css.li}>
        <NavLink to="/register" className={getNavLinkClass}>
          Registration
        </NavLink>
      </li>
      <li className={css.li}>
        <NavLink to="/login" className={getNavLinkClass}>
          SignIn
        </NavLink>
      </li>
    </>
  );
}
