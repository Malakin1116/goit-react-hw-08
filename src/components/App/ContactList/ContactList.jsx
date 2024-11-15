// import css from "./ContactList.module.css";
// import Contact from "./Contact/Contact";
// import { useSelector } from "react-redux";
// import { selectFilteredContacts } from "../../../redux/contacts/selectors";

// export default function ContactList() {
//   const filteredContacts = useSelector(selectFilteredContacts);

//   return (
//     <ul className={css.ul}>
//       {filteredContacts.length > 0 &&
//         filteredContacts.map((user) => (
//           <li key={user.id}>
//             <Contact id={user.id} name={user.name} number={user.number} />
//           </li>
//         ))}
//     </ul>
//   );
// }

// import css from "./ContactList.module.css";
// import Contact from "./Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../../redux/contacts/selectors";
import { useEffect } from "react";
import { apiGetContacts } from "../../../redux/contacts/operations";
import { SelectuserData } from "../../../redux/contacts/selectors";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const itemsContact = useSelector(SelectuserData);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div>
      {Array.isArray(itemsContact) && itemsContact.length === 0 && (
        <p>No contact yet</p>
      )}
      {Array.isArray(itemsContact) && itemsContact.length > 0 && (
        <ul>
          {itemsContact.map((i) => (
            <li key={i.id}>
              <p>{i.name}</p>
              <p>{i.number}</p>
              <button type="button">X</button>
            </li> // Відображаємо ім'я контакту
          ))}
        </ul>
      )}
    </div>
  );
}
