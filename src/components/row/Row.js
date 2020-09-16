import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  //when the <Row/> loads the code below will run (making a request to Tmdb)
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results); // <-- if this step is not done, nothing will render when .map is run below
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1> {title} </h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id} // <-- if anything hcanges in the array, we will not need to re-render the whole thing
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
