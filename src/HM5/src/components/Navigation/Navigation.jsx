import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <ul className={css.ul}>
      <li className={css.li}>
        <NavLink to="/" className={getNavLinkClass}>
          HomePages
        </NavLink>
      </li>
      <li className={css.li}>
        <NavLink to="/login" className={getNavLinkClass}>
          Sign In Page
        </NavLink>
      </li>
    </ul>
  );
}
