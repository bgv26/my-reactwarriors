import React from "react";
// import { moviesData } from "../moviesData";
import { API_URL, API_KEY_3 } from "../utils/api";
import "../stylesheets/index.scss";

import MovieItem from "./MovieItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      moviesToWatch: []
    };
  }

  componentDidMount() {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=popularity.desc`
    )
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results }));
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => item.id !== movie.id);
    this.setState({ movies: updateMovies });
  };

  addMovieToWatchList = movie => {
    const updateMovies = [...this.state.moviesToWatch, movie];
    this.setState({ moviesToWatch: updateMovies });
  };

  removeMovieFromWatchList = movie => {
    const updateMovies = this.state.moviesToWatch.filter(
      item => item.id !== movie.id
    );
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
                      addMovieToWatchList={this.addMovieToWatchList}
                      removeMovieFromWatchList={this.removeMovieFromWatchList}
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
