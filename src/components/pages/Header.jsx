import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Header() {
  return (
    <ul className={css.ul}>
      <li className={css.li}>
        <NavLink to="/" className={getNavLinkClass}>
          HomePages
        </NavLink>
      </li>
    </ul>
  );
}
