import React, { Component } from "react";

export class IncrementButton extends Component {
  render() {
    const { index } = this.props;
    return (
      <button
        data-button-index={index}
        className="item-button increment"
        onClick={() => this.props.changeQuantity(index, 1)}
      >
        +
      </button>
    );
  }
}

export default IncrementButton;
