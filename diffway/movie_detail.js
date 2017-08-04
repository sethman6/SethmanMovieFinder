import React from "react";

const MovieDetail = ({ movie }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const movieId = movie.id.movieId;
  const url = `#{movieId}`;

  return (
    <div className="movie-detail col-md-8">
      <div className="details">
        <div>{movie.#}</div>
        <div>{movie.#}</div>
      </div>
    </div>
  );
};

export default MovieDetail;
