import React from "react";
import classNames from "classnames";

const MovieTabs = props => {
  const { sort_by, updateSortBy } = props;
  const handleClick = value => {
    return () => updateSortBy(value);
  };
  const getItemClassName = value =>
    classNames("nav-link", { active: sort_by === value });

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getItemClassName("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getItemClassName("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getItemClassName("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
};

export default MovieTabs;
