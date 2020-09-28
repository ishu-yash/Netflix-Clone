import React, { useEffect, useState } from "react";
import { IMAGE_URL } from "../../Api/axios";
import getData from "../../Api/ApiService";
import requests from "../../Api/request";
import "./Banner.css";

const Banner = (props) => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const promise = getData(requests.fetchNetflixOriginals);
    promise.then((response) =>
      setBanner(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      )
    );
  }, []);

  const description = (n) => {
    return banner.overview?.length > n
      ? banner.overview.substr(0, n - 1) + "..."
      : banner.overview;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${IMAGE_URL + (banner && banner.backdrop_path)})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {banner && (banner.title || banner.name || banner.original_name)}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_desc">{description(150)}</h1>
      </div>
      <div className="banner-fadebottom" />
    </header>
  );
};

export default Banner;
