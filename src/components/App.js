import React from "react";
import { moviesData } from "../moviesData";
import "../css/styles.css";

import MovieItem from "./MovieItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
      moviesToWatch: []
    };
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => item.id !== movie.id);
    this.setState({ movies: updateMovies });
  };

  addMovieToWatch = movie => {
    const updateMovies = [...this.state.moviesToWatch, movie];
    this.setState({ moviesToWatch: updateMovies });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWatch={this.addMovieToWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.moviesToWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;