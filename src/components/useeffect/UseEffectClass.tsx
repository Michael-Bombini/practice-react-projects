import React, { Component } from "react";

interface State {
  name: string;
  age: number;
}

class UseEffectClass extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  componentDidMount() {
    console.log("Mounts");
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    const { name, age } = this.state;

    if (name !== prevState.name || age !== prevState.age) {
      console.log("Name or Age changed", name, age);
      document.title = name;
    }
  }

  componentWillUnmount() {
    console.log("Unmounts");
  }

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  handleAgeIncrease = () => {
    this.setState((prevState) => ({ age: prevState.age + 1 }));
  };

  render() {
    const { name } = this.state;

    return (
      <div className="text-white">
        <input
          className="text-black"
          type="text"
          placeholder="name"
          value={name}
          onChange={this.handleNameChange}
        />
        <button
          className="bg-white mx-4 text-black"
          onClick={this.handleAgeIncrease}
        >
          Age Increase
        </button>
      </div>
    );
  }
}

export default UseEffectClass;
