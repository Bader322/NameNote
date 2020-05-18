import React, { Component } from "react";
import Counters from "./counters";
import NavBar from "./navBar";
import Question from "./question";
import $ from "jquery";

export default class main extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: counters });
  };

  handleDec = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    // can't go below zero
    if (counters[index].value <= 0) {
      counters[index].value = 0;
    }
    this.setState({ counters: counters });
  };

  handleInc = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  summedCounters = () => {
    let addedValuesArray = this.state.counters.map((counter) => {
      return counter.value;
    });
    if (addedValuesArray.length === 0) return;
    let addedValues = addedValuesArray.reduce((acc, curr) => {
      return acc + curr;
    });
    return addedValues;

    // console.log("addedCounters: " + addedCounters);
    // return addedCounters;
  };

  countersOn = () => {
    let countersOn = this.state.counters.filter((counter) => {
      return counter.value > 0 ? counter : 0;
    });
    return countersOn.length;
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />

        {/* // <Counters
          onReset={this.handleReset}
          onDecrement={this.handleDec}
          onIncrement={this.handleInc}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        /> } */}
        <Question />
      </React.Fragment>
    );
  }
}
