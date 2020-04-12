import React, { Component } from "react";
import Second from "./button";
class Main extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
      { id: 4, value: 6 },
      { id: 5, value: 7 },
      { id: 6, value: 0 },
    ],
  };

  handleReset = () => {
    const ncount = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: ncount });
  };

  handleDelete = (id) => {
    const newcount = this.state.counters.filter((count) => count.id !== id);
    this.setState({
      counters: newcount,
    });
  };
  //will not update the state directly
  //will make a new counters array and will update it
  //have react update the state
  handleIncrement = (counter) => {
    //  newCount[0].value++;--->This is incorrect way...directly modifiying
    //First will "CLone" the "current" counter "clicked" object
    //Ye dono Same hi hai but will clone for the reason below
    //  newCount[0] = { ...counter }; //this will clone different object to newCount[index]...otherwise will directly modify the state object
    const newCount = [...this.state.counters];
    const index = newCount.indexOf(counter);
    newCount[index] = { ...counter };
    newCount[index].value++;
    console.log(newCount);
    this.setState({
      counters: newCount,
    });
  };

  handleRemove = (counter) => {
    const newCount = [...this.state.counters];
    const index = newCount.indexOf(counter);
    newCount[index] = { ...counter };
    newCount[index].value--;
    console.log(newCount);
    this.setState({
      counters: newCount,
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
            onIncrement={this.handleIncrement}
            onRemove={this.handleRemove}
          />
        ))}
      </div>
    );
  }
}
export default Main;
