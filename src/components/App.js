import React from "react";
import { moviesData } from "../moviesData";
import "../css/styles.css";

import MovieItem from "./MovieItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData
    };
  }

  render() {
    return this.state.movies.map(function(movie) {
      return (
        <div className="App">
          <MovieItem data={movie} />
        </div>
      );
    });
  }
}

export default App;
