import React, { useEffect, useState } from "react";
import "./Details.css";
import ReactPlayer from "react-player";

const Details = ({ match, MoviesData }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(MoviesData.find((el) => el.id === +match.params.id));
  }, [movie, match.params.id]);
  return (
    <div className="card">
      <div className="card-header Title">{movie.Title}</div>
      <div className="card-body des"> {movie.Description} </div>
      <ReactPlayer className="Trailer" url={movie.Trailer} />
    </div>
  );
};

export default Details;
