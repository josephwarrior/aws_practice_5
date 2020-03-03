import React, { Component } from "react";

export class ListHeader extends Component {
  render() {
    if (this.props.inventoryLength > 0) {
      return (
        <section>
          <h3 className="header-name">ITEM NAME</h3>
          <h3 className="header-quantity">QUANTITY</h3>
          <h3 className="header-delete">DEL</h3>
        </section>
      );
    } else {
      return <section></section>;
    }
  }
}

export default ListHeader;
