import React, { Component } from "react";

interface Props {}

interface State {
  age: number;
  name: string;
}

export default class NameCounterClass extends Component<Props, State> {
  state: State = {
    age: 0,
    name: "",
  };

  handleIncreaseAge = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };

  handleDecreaseAge = () => {
    this.setState((prevState) => ({
      age: prevState.age - 1,
    }));
  };

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    const { age, name } = this.state;

    return (
      <div>
        <div>
          <span>Age: {age}</span>
          <button onClick={this.handleIncreaseAge}>Increase Age</button>
          <button onClick={this.handleDecreaseAge}>Decrease Age</button>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={this.handleNameChange}
            placeholder="Enter Name"
          />
          <p>Name: {name}</p>
        </div>
      </div>
    );
  }
}
