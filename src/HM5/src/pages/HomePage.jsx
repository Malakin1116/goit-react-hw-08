// import { useEffect, useState } from "react";
// import { fetchMovies } from "../moviesApi";
// import MovieList from "../components/MovieList/MovieList";
// import { Outlet } from "react-router-dom";

// export default function HomePage() {
//   const [trending, setTrending] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);
//         const movies = await fetchMovies();
//         setTrending(movies.results);
//       } catch (error) {
//         console.error("Error fetching trending movies:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Trending today</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         trending && <MovieList movies={trending} from="home" />
//       )}
//       <Outlet />
//     </div>
//   );
// }

import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Trending today</h1>

      <Outlet />
    </div>
  );
}
