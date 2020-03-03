import React, { Component } from "react";
import AddButton from "./AddButton";

export class InputAndButtonArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  setName = e => this.setState({ name: e.target.value });

  clearInput = () => {
    this.setState({ name: "" });
  };

  render() {
    return (
      <div className="input-and-button-area">
        <input
          id="newItemInput"
          type="text"
          placeholder="enter new product name..."
          onChange={this.setName}
          value={this.state.name}
        />
        <AddButton
          name={this.state.name}
          addItem={this.props.addItem}
          clearInput={this.clearInput}
        />
      </div>
    );
  }
}

export default InputAndButtonArea;
