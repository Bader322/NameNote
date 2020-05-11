import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm m-3"
          onClick={() => this.props.onReset()}
        >
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDecrement={() => this.props.onDecrement(counter)}
            onIncrement={() => this.props.onIncrement(counter)}
            onDelete={() => this.props.onDelete(counter.id)}
            // getBadgeColor={this.getBadgeColor}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
// 1140
