import { Link } from "react-router-dom";

export default function MovieList({ movies, from, search }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from, search }}>
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
