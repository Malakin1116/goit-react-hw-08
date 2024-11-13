// import { useDispatch, useSelector } from "react-redux";
// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
// import { useEffect } from "react";

// import { fetchContacts } from "../../redux/contacts/operations";
// import {
//   SelectErrorData,
//   SelectLoadingData,
// } from "../../redux/contacts/selectors";

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const error = useSelector(SelectErrorData);
//   const loading = useSelector(SelectLoadingData);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {loading && <p>Loading ......</p>}
//       {!error && <ContactList />}
//     </div>
//   );
// }

import { Route, Routes } from "react-router-dom";
import ContactsPage from "../pages/ContactsPage";
import NotFoundPage from "../pages/NotFoundPage";
import Header from "../pages/Header";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

import Nav from "../pages/Nav";

export default function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
