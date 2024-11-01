import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.div}>
      <p className={css.p}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </div>
  );
}
