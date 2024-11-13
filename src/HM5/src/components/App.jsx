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
import { lazy, Suspense } from "react";
import Navigation from "./Navigation/Navigation";

const HomePage = lazy(() => import("../../../components/pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

import SignUpPage from "../../../components/pages/SignUpPage";
import SignInPage from "../../../components/pages/SignInPage";

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
