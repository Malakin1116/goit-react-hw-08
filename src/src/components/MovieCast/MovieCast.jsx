import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRequest } from "../../themoviedb-api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const res = await fetchRequest(`movie/${movieId}/credits`);
        setCast(res.data.cast);
        console.log(res.data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.cast_id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt={actor.name}
            style={{ width: "100px", height: "150px" }}
          />
          <p>
            {actor.name} in the role of {actor.character}
          </p>
        </li>
      ))}
    </ul>
  );
}
