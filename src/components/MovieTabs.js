import React from "react";
import classNames from "classnames";

class MovieTabs extends React.Component {
  handleClick = value => {
    return () => this.props.updateSortBy(value);
  };

  getItemClassName = value =>
    classNames("nav-link", { active: this.props.sort_by === value });

  render() {
    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={this.getItemClassName("popularity.desc")}
            onClick={this.handleClick("popularity.desc")}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={this.getItemClassName("revenue.desc")}
            onClick={this.handleClick("revenue.desc")}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={this.getItemClassName("vote_average.desc")}
            onClick={this.handleClick("vote_average.desc")}
          >
            Vote average desc
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;
