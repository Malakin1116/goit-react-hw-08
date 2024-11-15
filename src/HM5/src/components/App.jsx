// import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import Navigation from "./Navigation/Navigation";

// const HomePage = lazy(() => import("../pages/HomePage"));
// const MoviesPage = lazy(() => import("../pages/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
// const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
// const MovieReviews = lazy(() =>
//   import("../components/MovieReviews/MovieReviews")
// );
// const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

// export default function App() {
//   return (
//     <div>
//       <Navigation />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/movies" element={<MoviesPage />} />
//           <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
//             <Route
//               path="cast"
//               element={
//                 <Suspense fallback={<div>Loading Cast...</div>}>
//                   <MovieCast />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="reviews"
//               element={
//                 <Suspense fallback={<div>Loading Reviews...</div>}>
//                   <MovieReviews />
//                 </Suspense>
//               }
//             />
//           </Route>
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Navigation from "./Navigation/Navigation";

const HomePage = lazy(() => import("../../../components/pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

import SignUpPage from "../../../components/pages/SignUpPage";
import SignInPage from "../../../components/pages/SignInPage";
import { useDispatch, useSelector } from "react-redux";
import { apiGetCurrentUser } from "../../../redux/auth/operations";
import { selectUserDataIsRefreshing } from "../../../redux/auth/slice";
import ContactList from "../../../components/App/ContactList/ContactList";
import PrivateRoute from "../../../components/pages/PrivatRoute/PrivateRoute";
import RestrictedRoute from "../../../components/pages/RestrictedRoute/RestrictedRoute";
// Добавити лейзи Лоудинг це повязано з суспонсе який вже стоїть
import ContactForm from "../../../components/App/ContactForm/ContactForm";

export default function App() {
  const dispatch = useDispatch();
  const isRefrashing = useSelector(selectUserDataIsRefreshing);

  useEffect(() => {
    dispatch(apiGetCurrentUser());
  }, [dispatch]);

  if (isRefrashing) {
    return <div>Refrashing...</div>;
  }

  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactList />} />}
          />

          <Route
            path="/contactsform"
            element={<PrivateRoute component={<ContactForm />} />}
          />

          <Route
            path="/signup"
            element={<RestrictedRoute component={<SignUpPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<SignInPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
