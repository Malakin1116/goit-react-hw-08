import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";

import Layout from "../../components/Layout/Layout";
import PrivateRoute from "../../components/PrivatRoute/PrivateRoute";
import RestrictedRoute from "../../components/RestrictedRoute/RestrictedRoute";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const NotFoundPage = lazy(() => import("../NotFounderPage/NotFounderPage"));
const RegistrationPage = lazy(() =>
  import("../RagistrationPage/RegistrationPage")
);

const LoginPage = lazy(() => import("../LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../ContactsPage/ContactsPage"));

import { selectUserDataIsRefreshing } from "../../redux/auth/selectors";

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
              path="register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />

            <Route
              path="contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
