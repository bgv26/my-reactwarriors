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
    const { movie, removeMovie } = this.props;
    return (
      <div className="MovieItem">
        <Image src={movie.backdrop_path} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h2>{movie.average_rate}</h2>
        <div className="ButtonBlock">
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.toggleLike}
            className={this.state.like ? "btn--like--checked" : ""}
          >
            {this.state.like ? "Unlike" : "Like"}
          </button>
          <button type="button" onClick={removeMovie.bind(this, movie)}>
            Delete
          </button>
        </div>
        {this.state.show ? <p>{movie.overview}</p> : null}
      </div>
    );
  }
}

export default MovieItem;
