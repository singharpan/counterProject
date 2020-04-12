import React, { Component } from "react";

class Second extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.count);
          }}
        >
          Add to Cart
        </button>
        <button
          onClick={() => {
            this.props.onRemove(this.props.count);
          }}
        >
          Remove
        </button>
        <button onClick={() => this.props.onDelete(this.props.count.id)}>
          Delete
        </button>
        <h1>Count:{this.props.count.value}</h1>
      </div>
    );
  }
}

export default Second;
