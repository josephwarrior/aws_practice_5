import React, { Component } from "react";
import DecrementButton from "./DecrementButton.js";
import IncrementButton from "./IncrementButton.js";

export class ItemQuantityAndButtons extends Component {
  render() {
    const { item, index } = this.props;

    return (
      <div className="quantity-and-buttons-group">
        <DecrementButton
          item={item}
          index={index}
          changeQuantity={this.props.changeQuantity}
        />
        <span className="quantity-area">{item.quantity}</span>
        <IncrementButton
          index={index}
          changeQuantity={this.props.changeQuantity}
        />
        <button
          data-button-index={index}
          className="item-button delete"
          onClick={() => this.props.deleteItem(index)}
        >
          X
        </button>
      </div>
    );
  }
}

export default ItemQuantityAndButtons;
