import React, { Component } from "react";

export class ItemName extends Component {
  render() {
    return <span className="name-area">{this.props.item.name}</span>;
  }
}

export default ItemName;
