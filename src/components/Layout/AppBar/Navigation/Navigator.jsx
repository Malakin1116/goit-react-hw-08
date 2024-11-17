import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { selectUserDataIsLoggedIn } from "../../../../redux/auth/selectors";

const getNavLinkClass = ({ isActive }) =>
  clsx(css.link, isActive && css.isActive);

export default function Navigation() {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <>
      <li className={css.li}>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li className={css.li}>
          <NavLink to="/contacts" className={getNavLinkClass}>
            Contacts
          </NavLink>
        </li>
      )}
    </>
  );
}
