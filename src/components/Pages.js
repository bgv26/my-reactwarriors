import React from "react";
import classNames from "classnames";

class Pages extends React.Component {
  handleClick = value => {
    const page =
      value === "backward" ? this.props.page - 1 : this.props.page + 1;
    return () => this.props.updatePage(page);
  };

  getItemClassName = value => {
    return classNames("btn btn-primary", {
      disabled:
        (this.props.page === 1 && value === "backward") ||
        (this.props.pages === this.props.total_pages && value === "forward")
    });
  };

  getPageString = () =>
    `Page ${this.props.page} from ${this.props.total_pages}`;

  render() {
    return (
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-3">
          <button
            className={this.getItemClassName("backward")}
            onClick={this.handleClick("backward")}
          >
            Backward
          </button>
        </div>
        <div className="col-6">
          <p className="text-center">{this.getPageString()}</p>
        </div>
        <div className="col-3">
          <button
            className={this.getItemClassName("forward")}
            onClick={this.handleClick("forward")}
          >
            Forward
          </button>
        </div>
      </div>
    );
  }
}

export default Pages;
