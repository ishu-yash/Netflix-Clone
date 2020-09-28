import React from "react";
import "./Card.css";

const Card = (props) => {
  const name =
    props.movie?.title || props.movie?.name || props.movie?.original_name;
  return (
    <img
      src={props.image}
      alt="cards"
      className={`Card ${props.poster && "Card_Large"}`}
      onClick={() => props.clicked(name)}
    />
  );
};

export default Card;
