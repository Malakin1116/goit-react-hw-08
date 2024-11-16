import { useDispatch, useSelector } from "react-redux";
import { apiLogoutUser } from "../../../../redux/auth/operations";
import { selectUserData } from "../../../../redux/auth/slice";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onLogout = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <div className={css.userMenu}>
      <span className={css.greeting}>Hello, {userData.name}</span>
      <button onClick={onLogout} className={css.logoutButton}>
        Logout
      </button>
    </div>
  );
}
