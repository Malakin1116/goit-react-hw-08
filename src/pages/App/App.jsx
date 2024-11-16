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
//       <h1>Hello</h1>
//       <Navigation />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />

//           <Route
//             path="/contacts"
//             element={<PrivateRoute component={<ContactList />} />}
//           />

//           <Route
//             path="/contactsform"
//             element={<PrivateRoute component={<ContactForm />} />}
//           />

//           <Route
//             path="/signup"
//             element={<RestrictedRoute component={<SignUpPage />} />}
//           />
//           <Route
//             path="/login"
//             element={<RestrictedRoute component={<SignInPage />} />}
//           />
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// }

export default function App() {
  return <h1>hello</h1>;
}
