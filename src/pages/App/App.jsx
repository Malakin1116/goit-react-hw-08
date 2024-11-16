// import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
//  import Navigation from "./Navigation/Navigation";

// const HomePage = lazy(() =>
//   import("../../../components/pages/homePage/HomePage")
// );
//  const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

//  import SignUpPage from "../../../components/pages/SignUpPage";
//  import SignInPage from "../../../components/pages/SignInPage";
//  import { useDispatch, useSelector } from "react-redux";
//  import { apiGetCurrentUser } from "../../../redux/auth/operations";
//  import { selectUserDataIsRefreshing } from "../../../redux/auth/slice";
//  import ContactList from "../../../components/App/ContactList/ContactList";
//  import PrivateRoute from "../../../components/pages/PrivatRoute/PrivateRoute";
//  import RestrictedRoute from "../../../components/pages/RestrictedRoute/RestrictedRoute";
//   // Добавити лейзи Лоудинг це повязано з суспонсе який вже стоїть
//  import ContactForm from "../../../components/App/ContactForm/ContactForm";

// export default function App() {
//      const dispatch = useDispatch();
//      const isRefrashing = useSelector(selectUserDataIsRefreshing);

//      useEffect(() => {
//        dispatch(apiGetCurrentUser());
//      }, [dispatch]);

//      if (isRefrashing) {
//        return <div>Refrashing...</div>;
//      }

//   return (
//     <div>
//         <Routes>

//           <Route
//             path="/contactsform"
//             element={<PrivateRoute component={<ContactForm />} />}
//           />

//         </Routes>
//     </div>
//   );
// }

// import { Routes, Route } from "react-router-dom";
// import { Suspense, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { apiGetCurrentUser } from "../../redux/auth/operations";

// import Layout from "../Layout/Layout";
// import HomePage from "../HomePage/HomePage";
// import NotFoundPage from "../NotFounderPage/NotFounderPage";
// import RegistrationPage from "../RagistrationPage/RegistrationPage";
// import LoginPage from "../LoginPage/LoginPage";
// import ContactList from "../ContactsPage/ContactsList/ContactList";
// import ContactForm from "../ContactsPage/ContactForm/ContactForm";

// import PrivateRoute from "../PrivatRoute/PrivateRoute";

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(apiGetCurrentUser());
//   }, [dispatch]);

//   return (
//     <div>
//       <Layout />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />

//           <Route path="/signup" element={<RegistrationPage />} />
//           <Route path="/login" element={<LoginPage />} />

//           <Route
//             path="/contacts"
//             element={<PrivateRoute component={<ContactList />} />}
//           />
//           <Route
//             path="/contactsform"
//             element={<PrivateRoute component={<ContactForm />} />}
//           />

//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiGetCurrentUser } from "../../redux/auth/operations";

import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivatRoute/PrivateRoute";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const NotFoundPage = lazy(() => import("../NotFounderPage/NotFounderPage"));
const RegistrationPage = lazy(() =>
  import("../RagistrationPage/RegistrationPage")
);
const RestrictedRoute = lazy(() =>
  import("../RestrictedRoute/RestrictedRoute")
);
const LoginPage = lazy(() => import("../LoginPage/LoginPage"));
const ContactList = lazy(() =>
  import("../ContactsPage/ContactsList/ContactList")
);
const ContactForm = lazy(() =>
  import("../ContactsPage/ContactForm/ContactForm")
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="signup"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />

            <Route
              path="contacts"
              element={<PrivateRoute component={<ContactList />} />}
            />
            <Route
              path="contactsform"
              element={<PrivateRoute component={<ContactForm />} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
