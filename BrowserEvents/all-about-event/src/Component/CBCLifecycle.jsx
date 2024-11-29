import React, { Component } from "react";

export default class CBCLifeCycle extends Component {
  constructor() {
    super();
    console.log("I am Constructor");
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log("Mounting Phase");
  }

  componentDidUpdate() {
    console.log("prev state was", this.state.count);
    // return null;
  }
  componentWillUnmount() {
    console.log("Unmounting phase");
  }
  render() {
    return (
      <>
        <h1>Life Cycle {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update
        </button>
      </>
    );
  }
}
