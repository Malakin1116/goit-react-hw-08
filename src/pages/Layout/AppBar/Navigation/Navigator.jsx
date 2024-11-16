// import css from "./Navigation.module.css";
// import { NavLink } from "react-router-dom";
// import clsx from "clsx";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

// import {
//   selectUserDataIsLoggedIn,
//   selectUserData,
// } from "../../../../redux/auth/slice";
// import { apiLogoutUser } from "../../../../redux/auth/operations";

// const getNavLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.isActive);
// };

// export default function Navigation() {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
//   const userData = useSelector(selectUserData);

//   const onLogout = () => {
//     dispatch(apiLogoutUser());
//   };

//   return (
//     <ul className={css.ul}>
//       <li className={css.li}>
//         <NavLink to="/" className={getNavLinkClass}>
//           HomePages
//         </NavLink>
//       </li>
//       <li className={css.li}>
//         <NavLink to="/contacts" className={getNavLinkClass}>
//           Contacts
//         </NavLink>
//       </li>
//       <li className={css.li}>
//         <NavLink to="/contactsform" className={getNavLinkClass}>
//           contactsform
//         </NavLink>
//       </li>
//       {isLoggedIn ? (
//         <li className={css.li}>
//           <span>Hello, {userData.name}</span>
//           <button onClick={onLogout} type="button">
//             Logout
//           </button>
//         </li>
//       ) : (
//         <>
//           <li className={css.li}>
//             <NavLink to="/signup" className={getNavLinkClass}>
//               SignUp
//             </NavLink>
//           </li>
//           <li className={css.li}>
//             <NavLink to="/login" className={getNavLinkClass}>
//               SignIn
//             </NavLink>
//           </li>
//         </>
//       )}
//     </ul>
//   );
// }

import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  selectUserDataIsLoggedIn,
  selectUserData,
} from "../../../../redux/auth/slice";
import { apiLogoutUser } from "../../../../redux/auth/operations";
// Увага сюди

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  const userData = useSelector(selectUserData);

  const onLogout = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <ul className={css.ul}>
      <li className={css.li}>
        <NavLink to="/" className={getNavLinkClass}>
          HomePages
        </NavLink>
      </li>
      <li className={css.li}>
        <NavLink to="/contacts" className={getNavLinkClass}>
          Contacts
        </NavLink>
      </li>
      <li className={css.li}>
        <NavLink to="/contactsform" className={getNavLinkClass}>
          contactsform
        </NavLink>
      </li>
      {isLoggedIn ? (
        <li className={css.li}>
          <span>Hello, {userData.name}</span>
          <button onClick={onLogout} type="button">
            Logout
          </button>
        </li>
      ) : (
        <>
          <li className={css.li}>
            <NavLink to="/signup" className={getNavLinkClass}>
              SignUp
            </NavLink>
          </li>
          <li className={css.li}>
            <NavLink to="/login" className={getNavLinkClass}>
              SignIn
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
}
