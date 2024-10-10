import axios from "axios";

// const BASE_QUERY_URL = "https://api.jikan.moe/v4/anime?q=";
const BASE_URL = "https://api.jikan.moe/v4/anime";

const animeApi = axios.create({
  baseURL: BASE_URL,
});

export const searchAnime = async (query) => {
  const response = await animeApi.get(`?q=${query}`);
  return response.data;
};
