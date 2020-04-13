import React from "react";
import "../stylesheets/index.scss";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false,
      willWatch: false
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  toggleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  toggleWillWatch = () => {
    this.setState({
      willWatch: !this.state.willWatch
    });
  };

  render() {
    const {
      movie,
      removeMovie,
      addMovieToWatchList,
      removeMovieFromWatchList
    } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`${IMAGE_URL}${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title}
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>
            <button
              type="button"
              className={
                this.state.willWatch ? "btn btn-success" : "btn btn-secondary"
              }
              onClick={() => {
                this.toggleWillWatch();
                this.state.willWatch
                  ? removeMovieFromWatchList(movie)
                  : addMovieToWatchList(movie);
              }}
            >
              {this.state.willWatch
                ? "Remove from Watch List"
                : "Add to Watch List"}
            </button>
          </div>
          <button type="button" onClick={removeMovie.bind(null, movie)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default MovieItem;
