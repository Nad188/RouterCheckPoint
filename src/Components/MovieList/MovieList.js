import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import Add from "../Add/Add";

const MovieList = ({ MoviesData, filterbytitle, filterbyriting }) => {
  const [upload, setUpload] = useState(MoviesData);
  return (
    <div className="MovieList container">
      {upload
        .filter(
          (movie) =>
            movie.Title.toUpperCase().includes(
              filterbytitle.toUpperCase().trim()
            ) && movie.Rating >= filterbyriting
        )
        .map((oneMovie, id) => (
          <MovieCard oneMovie={oneMovie} key={id} />
        ))}
      <Add upload={upload} setUpload={setUpload} />
    </div>
  );
};

export default MovieList;
