import React, { Component } from "react";
import Second from "./button";
class Main extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 },
    ],
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
        <h1>This is Addtion and Deletion</h1>
        {this.state.counters.map((count) => (
          <Second
            key={count.id}
            id={count.id}
            value={count.value}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}
export default Main;
