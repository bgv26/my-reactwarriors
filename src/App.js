import React from "react";
import "./styles.css";

import MovieItem from "./MovieItem";

const movie = {
  title: "Avengers. Infinity War",
  average_rate: 8.5,
  src: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  overview:
    "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos."
};

export default function App() {
  return (
    <div className="App">
      <MovieItem data={movie} />
    </div>
  );
}
