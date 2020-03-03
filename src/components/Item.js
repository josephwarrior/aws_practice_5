import React, { Component } from "react";
import ItemName from "./ItemName";
import ItemQuantityAndButtons from "./ItemQuantityAndButtons";

export class Item extends Component {
  render() {
    const { item, index } = this.props;
    return (
      <li>
        <ItemName item={this.props.item} />
        <ItemQuantityAndButtons
          item={item}
          index={index}
          changeQuantity={this.props.changeQuantity}
          deleteItem={this.props.deleteItem}
        />
      </li>
    );
  }
}

export default Item;
