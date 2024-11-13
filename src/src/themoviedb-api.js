import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "235dd2eadd7413b5f6c691c6ce9cc259";

export const fetchRequest = async (endpoint) => {
  const response = await axios.get(endpoint, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return response;
};
