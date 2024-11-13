import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from "react-router-dom";
import { fetchRequest } from "../themoviedb-api";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const res = await fetchRequest(`movie/${movieId}`);
        setMovieDetails(res.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    if (location.state?.from === "movies") {
      navigate(`/movies?${location.state.search}`);
    } else if (location.state?.from === "home") {
      navigate("/");
    } else {
      navigate("/movies");
    }
  };

  return (
    <div>
      <button onClick={handleGoBack} className={css.backButton}>
        ← Go back
      </button>

      {movieDetails && (
        <div className={css.contentdiv}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className={css.moviePoster}
          />
          <div className={css.movieInfo}>
            <h1 className={css.movieTitle}>{movieDetails.title}</h1>
            <p>
              <strong>User Score:</strong>{" "}
              {(movieDetails.vote_average * 10).toFixed(1)}%
            </p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
      )}

      <nav>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
