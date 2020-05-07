import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    styles: {
      fontWeight: "bold",
      fontSize: 25,
    },
  };

  //   dynamic classes

  render() {
    return (
      // instead of div, use this to aviod adding another div
      <React.Fragment>
        <div className="row">
          <div className="col">
            <button
              onClick={this.handleInc}
              style={this.state.styles}
              className="btn btn-primary m-3 "
            >
              Inc
            </button>
            <button
              onClick={this.handleDec}
              style={this.state.styles}
              className="btn btn-primary m-3 "
            >
              Dec
            </button>
            <p className={this.getBadgeColor()} style={this.state.styles}>
              {this.formatCount()}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
  // handle decrement
  handleDec = () => {
    this.setState({ value: this.state.value - 1 });
    if (this.state.value <= 0) {
      return this.setState({ value: (this.setState.value = 0) });
    }
  };

  // handle increment
  handleInc = () => {
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeColor() {
    let classes = "badge m-3 badge-";
    classes += this.state.value === 0 ? "warning" : "danger";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
