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
    const {
      data: { title, average_rate, backdrop_path: src, overview }
    } = this.props;
    return (
      <div className="MovieItem">
        <Image src={src} alt={title} />
        <h1>{title}</h1>
        <h2>{average_rate}</h2>
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
        </div>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

export default MovieItem;
