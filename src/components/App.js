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

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => item.id !== movie.id);
    this.setState({ movies: updateMovies });
  };

  render() {
    return (
      <div className="App">
        {this.state.movies.map(movie => {
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
              removeMovie={this.removeMovie}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
