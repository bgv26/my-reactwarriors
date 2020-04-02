import React from "react";
import "./styles.css";

import Image from "./Image";

class MovieItem extends React.Component {
  render() {
    const {
      data: { title, average_rate, src }
    } = this.props;
    return (
      <div className="MovieItem">
        <Image src={src} alt={title} />
        <h1>{title}</h1>
        <h2>{average_rate}</h2>
      </div>
    );
  }
}

export default MovieItem;
