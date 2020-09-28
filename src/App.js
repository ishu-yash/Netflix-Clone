import React from "react";
import requests from "./Api/request";
import Row from "./Components/Row/Row";
import "./App.css";
import Banner from "../src/Components/Banner/Banner";
import Nav from "../src/Components/Nav/Nav";

const title = [
  "NETFLIX ORIGINALS",
  "Trending Now",
  "Top Rated",
  "Action Movies",
  "Comedy Movies",
  "Horror Movies",
  "Romance Movies",
  "Documentaries",
];

const App = () => {
  const requestKeys = Object.keys(requests);
  return (
    <div className="app">
      <Nav />
      <Banner />
      <div className="row">
        {requestKeys.map((key, index) => (
          <Row title={title[index]} fetchUrl={requests[key]} key={key} />
        ))}
      </div>
    </div>
  );
};

export default App;
