import React, { Component } from "react";

export class AddButton extends Component {
  render() {
    if (this.props.name === "") {
      return (
        <button id="addNewItemButton" disabled>
          ADD
        </button>
      );
    } else {
      return (
        <button
          id="addNewItemButton"
          onClick={() => {
            this.props.addItem(this.props.name);
            this.props.clearInput();
          }}
        >
          ADD
        </button>
      );
    }
  }
}

export default AddButton;
