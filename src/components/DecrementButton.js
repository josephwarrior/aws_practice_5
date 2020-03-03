import React, { Component } from "react";

export class DecrementButton extends Component {
  render() {
    const { item, index } = this.props;
    if (item.quantity > 0) {
      return (
        <button
          data-button-index={index}
          className="item-button decrement"
          onClick={() => this.props.changeQuantity(index, -1)}
        >
          -
        </button>
      );
    } else {
      return (
        <button
          data-button-index={index}
          className="item-button decrement"
          disabled="disabled"
        >
          -
        </button>
      );
    }
  }
}

export default DecrementButton;
