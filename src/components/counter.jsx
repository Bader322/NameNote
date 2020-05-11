import React, { Component } from "react";
// controlled component, one that does not carry its own state
class Counter extends Component {
  //   dynamic classes
  styles = {
    fontWeight: "bold",
    fontSize: "24px",
  };

  render() {
    return (
      // instead of div, use this to aviod adding another div
      <React.Fragment>
        <div className="row">
          <div className="col ">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              style={this.styles}
              className="btn btn-primary m-3 "
            >
              Inc
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              style={this.styles}
              className="btn btn-primary m-3 "
            >
              Dec
            </button>
            <p className={this.getBadgeColor()} style={this.styles}>
              {this.formatCount()}
            </p>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              style={this.styles}
              className="btn btn-danger m-3 "
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  getBadgeColor = () => {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "danger";

    return classes;
  };
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
