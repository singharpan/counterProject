import React, { Component } from "react";

class Second extends Component {
  state = {
    count: this.props.value,
  };

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleRemove = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add to Cart</button>
        <button onClick={this.handleRemove}>Remove</button>
        <button onClick={() => this.props.onDelete(this.props.id)}>
          Delete
        </button>
        <h1>Count:{this.state.count}</h1>
      </div>
    );
  }
}

export default Second;
