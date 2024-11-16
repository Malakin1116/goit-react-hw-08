import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getNavLinkClass = ({ isActive }) =>
  clsx(css.link, isActive && css.isActive);

export default function Navigation() {
  return (
    <li className={css.li}>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
    </li>
  );
}
