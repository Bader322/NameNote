import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  //   styles to apply to elements
  styles = {
    fontWeight: "bold",
    fontSize: 80,
  };

  //   dynamic classes

  render() {
    return (
      // instead of div, use this to aviod adding another div
      <React.Fragment>
        <button className="btn btn-secondary">Inc</button>
        <span style={this.styles} className={this.getBadgeColor()}>
          {this.formatCount()}
        </span>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeColor() {
    let classes = "badge m-3 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
