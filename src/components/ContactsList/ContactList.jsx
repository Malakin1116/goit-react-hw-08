import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiGetContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

import styles from "./ContactList.module.css";

import Contact from "./Contact/Contact";
import SearchBox from "../SearchBox/SearchBox";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  if (!filteredContacts || filteredContacts.length === 0) {
    return (
      <div>
        <SearchBox />
        <p>No contacts yet</p>
      </div>
    );
  }

  return (
    <div>
      <SearchBox />
      <ul className={styles.ul}>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
}
