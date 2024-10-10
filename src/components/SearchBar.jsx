import {
  InputAdornment,
  FormControl,
  OutlinedInput as Input,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import SearchResult from "./SearchResult";
import BorderLinearProgress from "./BorderLinearProgress";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ label, ...otherProps }) => {
  const BASE_API = "https://api.jikan.moe/v4/anime";

  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("");

  const fetchAnimeList = () => {
    setLoading(true);
    // TODO: create a seperate api file (api/animeApi.js)
    axios
      .get(`${BASE_API}?q=${query}`)
      .then((response) => {
        // api already has pagination function,
        // which is set to 25 items per page
        // TODO: handle pagination
        setAnimeList(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Only search when query string length is more than 2
    if (query.length > 2) {
      fetchAnimeList();
    } else {
      setAnimeList([]);
    }
  }, [query]);

  return (
    <FormControl fullWidth sx={{ mb: 4 }}>
      <Input
        value={query}
        fullWidth
        disableUnderline
        sx={{ borderRadius: "1rem" }}
        color="primary"
        onChange={(e) => setQuery(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
      {!loading ? (
        <SearchResult items={animeList} />
      ) : (
        <BorderLinearProgress fullWidth sx={{ mt: 4 }} />
      )}
    </FormControl>
  );
};

export default SearchBar;
