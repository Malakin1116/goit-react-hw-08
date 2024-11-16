import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";

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
import { selectUserDataIsRefreshing } from "../../redux/auth/slice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectUserDataIsRefreshing);

  if (isRefreshing) {
    return <div>Loading user...</div>;
  }

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
