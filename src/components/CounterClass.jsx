import React, { Component } from "react";
class CounterClass extends Component {
  state = { counter: 0, fruta: "" };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }
  handleFruta(frutaRecibida) {
    this.setState({ fruta: frutaRecibida });
  }

  render() {
    return (
      <div>
        <h1>Counter Class - You've pushed {this.state.counter} time(s)</h1>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <hr />
        <h2>Que fruta te gusta más? - {this.state.fruta}</h2>
        <button onClick={() => this.handleFruta("fresas")}>Fresas</button>
        <button onClick={() => this.handleFruta("mango")}>Mango</button>
      </div>
    );
  }
}

export default CounterClass;
