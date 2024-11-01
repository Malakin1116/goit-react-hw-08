import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.ul}>
      {filteredContacts.length > 0 &&
        filteredContacts.map((user) => (
          <li key={user.id}>
            <Contact id={user.id} name={user.name} number={user.number} />
          </li>
        ))}
    </ul>
  );
}
