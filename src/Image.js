import React from "react";
import "./styles.css";

export default function Image(props) {
  return <img className="Image" src={props.src} alt={props.alt} />;
}
