import React from "react";
import "../css/styles.css";

const URL = "https://image.tmdb.org/t/p/w500";

export default function Image(props) {
  return (
    <img className="card-img-top" src={`${URL}${props.src}`} alt={props.alt} />
  );
}
