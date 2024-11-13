import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRequest } from "../../themoviedb-api";

import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const res = await fetchRequest(`movie/${movieId}/reviews`);
        console.log(res.data.results);
        setReviews(res.data.results);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <ul className={css.ul}>
      {reviews.length > 0 ? (
        reviews.map((e) => (
          <li key={e.id}>
            <h2>{e.author}:</h2>
            <p>{e.content}</p>
          </li>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </ul>
  );
}
