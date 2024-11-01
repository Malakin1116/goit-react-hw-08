import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useEffect } from "react";

import { fetchContacts } from "../../redux/contactsOps";
import { SelectErrorData, SelectLoadingData } from "../../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const error = useSelector(SelectErrorData);
  const loading = useSelector(SelectLoadingData);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading ......</p>}
      {!error && <ContactList />}
    </div>
  );
}
