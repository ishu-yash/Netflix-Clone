import React, { useEffect, useState } from "react";
import "./Row.css";
import getData from "../../Api/ApiService";
import Card from "../Card/Card";
import { IMAGE_URL } from "../../Api/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(null);

  const handleTrailer = (name) => {
    const promise = movieTrailer(name || "");
    promise
      .then((url) => {
        const suffix = new URLSearchParams(new URL(url).search).get("v");
        setTrailerUrl(suffix);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const promise = getData(props.fetchUrl);
    promise.then((response) => setMovies(response.data.results));
  }, [props.fetchUrl]);

  const netflix = props.title === "NETFLIX ORIGINALS";

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div>
      <h2 className="title_text">{props.title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <Card
            image={
              IMAGE_URL + (netflix ? movie.poster_path : movie.backdrop_path)
            }
            poster={netflix}
            key={movie.id}
            movie={movie}
            clicked={handleTrailer}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
