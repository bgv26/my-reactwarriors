import React from "react";
import "../css/styles.css";

import Image from "./Image";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
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

  render() {
    const { movie, removeMovie, addMovieToWatch } = this.props;
    return (
      <div className="card">
        <Image
          src={movie.backdrop_path || movie.poster_path}
          alt={movie.title}
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.average_rate}</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={addMovieToWatch.bind(null, movie)}
            >
              Will watch
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
