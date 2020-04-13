import React from "react";
import classNames from "classnames";

const Pages = props => {
  const { page, total_pages, updatePage } = props;
  const handleClick = value => {
    const next_page = value === "backward" ? page - 1 : page + 1;
    return () => updatePage(next_page);
  };

  const getItemClassName = value => {
    return classNames("btn btn-primary", {
      disabled:
        (page === 1 && value === "backward") ||
        (page === total_pages && value === "forward")
    });
  };

  return (
    <div className="row d-flex justify-content-between align-items-center">
      <div className="col-3">
        <button
          className={getItemClassName("backward")}
          onClick={handleClick("backward")}
        >
          Backward
        </button>
      </div>
      <div className="col-6">
        <p className="text-center">{`Page ${page} from ${total_pages}`}</p>
      </div>
      <div className="col-3">
        <button
          className={getItemClassName("forward")}
          onClick={handleClick("forward")}
        >
          Forward
        </button>
      </div>
    </div>
  );
};

export default Pages;
