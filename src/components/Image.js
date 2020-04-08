import React from "react";
import "../stylesheets/index.scss";

const URL = "https://image.tmdb.org/t/p/w500";

export default function Image(props) {
  return (
    <img className="card-img-top" src={`${URL}${props.src}`} alt={props.alt} />
  );
}
