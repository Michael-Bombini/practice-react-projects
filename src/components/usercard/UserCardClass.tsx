import { Component } from "react";

interface Props {
  name: string;
  phoneNumber: string;
  age: number;
  address: string;
}

export default class UserCardClass extends Component<Props> {
  render() {
    const { name, phoneNumber, age, address } = this.props;
    return (
      <div>
        {age}
        {name}
        {phoneNumber} {address}
      </div>
    );
  }
}
