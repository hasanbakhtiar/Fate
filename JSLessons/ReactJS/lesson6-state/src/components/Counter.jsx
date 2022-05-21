import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }
  decrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  reset(){
    this.setState({
        count: 0
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.decrement} className="btn btn-danger">
          -1
        </button>
        <span className="ms-3 me-3">{this.state.count}</span>
        <button onClick={this.increment} className="btn btn-success">
          +1
        </button>
        <button onClick={this.reset} className="ms-5 btn btn-warning">reset</button>
      </div>
    );
  }
}

export default Counter;
