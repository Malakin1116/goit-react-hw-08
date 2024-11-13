import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">Homapage with pub</NavLink>

      <NavLink to="/contacts">contacts</NavLink>

      <NavLink to="/login">login</NavLink>

      <NavLink to="/register">register</NavLink>
    </header>
  );
}