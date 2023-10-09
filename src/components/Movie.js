import "./Movie.css";
import data from "../data";
import MovieDeleteButton from "./MovieDeleteButton";
import AllDeleteButton from "./AllDeleteButton";
import ReloadMovieButton from "./ReloadMovieButton";
import { useState } from "react";

const Movie = () => {
  const [movieList, setMovieList] = useState(data);

  const deleteOneMovie = (idecko) => {
    const filteredMovie = movieList.filter((oneMovie) => {
      return oneMovie.id !== idecko;
    });

    setMovieList(filteredMovie);
  };

  const deleteAllMovies = () => {
    setMovieList([]);
  };

  const reloadAll = () => {
    setMovieList(data);
  };

  return (
    <section>
      <div className="all-movie">
        {movieList.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;

          return (
            <div className="one-movie" key={id}>
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
              <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)} />
            </div>
          );
        })}
      </div>
      <div className="button-box">
        <AllDeleteButton deleteMovies={deleteAllMovies} />
        <ReloadMovieButton reloadAllM={reloadAll} />
      </div>
    </section>
  );
};

export default Movie;
