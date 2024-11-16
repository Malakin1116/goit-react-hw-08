import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { apiGetContacts } from "../../../redux/contacts/operations";

import { selectFilteredContacts } from "../../../redux/contacts/selectors";
import Contact from "./Contact/Contact";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  if (!filteredContacts || filteredContacts.length === 0) {
    return <p>No contacts yet</p>;
  }

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
