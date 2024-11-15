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

export default function ContactList() {
  return <h1>ContactList</h1>;
}
