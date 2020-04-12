import React, { Component } from "react";
import Second from "./button";
class Main extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 3 },
      { id: 3, value: 6 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 },
    ],
  };

  handleReset = () => {
    const ncount = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: ncount });
    console.log(ncount);
  };

  handleDelete = (id) => {
    const newcount = this.state.counters.filter((count) => count.id !== id);
    this.setState({
      counters: newcount,
    });
  };
  render() {
    return (
      <div>
        <h1>Add to Cart or Remove from Cart</h1>
        <button onClick={this.handleReset}>Reset</button>
        {this.state.counters.map((count) => (
          <Second
            key={count.id}
            // id={count.id}
            // value={count.value}
            count={count}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}
export default Main;
