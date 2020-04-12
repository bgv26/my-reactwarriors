import React from "react";
// import { moviesData } from "../moviesData";
import { API_URL, API_KEY_3 } from "../utils/api";
import "../stylesheets/index.scss";

import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import Pages from "./Pages";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      moviesToWatch: [],
      sort_by: "popularity.desc",
      page: 1,
      total_pages: 1
    };
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${
        this.state.sort_by
      }&page=${this.state.page}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({ movies: data.results, total_pages: data.total_pages })
      );
  };

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.page !== this.state.page
    ) {
      this.getMovies();
    }
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

  updateSortBy = value => this.setState({ sort_by: value });

  updatePage = value => this.setState({ page: value });

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
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
            <div className="row mt-4">
              <div className="col-12">
                <Pages
                  page={this.state.page}
                  total_pages={this.state.total_pages}
                  updatePage={this.updatePage}
                />
              </div>
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
