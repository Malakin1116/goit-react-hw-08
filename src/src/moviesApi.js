import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "235dd2eadd7413b5f6c691c6ce9cc259";

export const fetchMovies = async () => {
  const response = await axios.get(`/trending/movie/day`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzVkZDJlYWRkNzQxM2I1ZjZjNjkxYzZjZTljYzI1OSIsIm5iZiI6MTcyODM5NTUyNy44MjY3OTIsInN1YiI6IjY2ZmY5YTY3NmZjNzRlNTc1NmY3ZjgzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hYGNpdZ8OY2XWPwVg41cDopG-p9Ve3Ujcq9HV6gJfxc",
    },
  });

  return response.data;
};
