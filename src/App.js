import React from "react";
import Item from "./components/Item.js";
import ListHeader from "./components/ListHeader.js";
import "./App.css";
import InputAndButtonArea from "./components/InputAndButtonArea.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [
        { name: "Books", quantity: 0 },
        { name: "Pencils", quantity: 2 },
      ],
    };
  }

  changeQuantity = (index, variation) => {
    this.setState((prevState, props) => ({
      inventory: prevState.inventory.map((invItem, invIndex) => {
        if (invIndex === index) {
          invItem.quantity += variation;
        }
        return invItem;
      }),
    }));
  };

  deleteItem = (index) => {
    this.setState((prevState, props) => ({
      inventory: prevState.inventory.filter((invItem, invIndex) => {
        return invIndex !== index;
      }),
    }));
  };

  addItem = (newItemName) => {
    const newItem = { name: newItemName, quantity: 0 };
    this.setState((prevState, props) => ({
      inventory: [...prevState.inventory, newItem],
    }));
  };

  render() {
    return (
      <div className="app-content">
        <h1>PRODUCT INVENTORY APP</h1>

        <InputAndButtonArea addItem={this.addItem} />
        <ListHeader inventoryLength={this.state.inventory.length} />
        <ul>
          {this.state.inventory.map((item, index) => {
            return (
              <Item
                key={index}
                item={item}
                index={index}
                changeQuantity={this.changeQuantity}
                deleteItem={this.deleteItem}
              />
            );
          })}
        </ul>
        <h6>&#174; 2020 JGuerrero</h6>
      </div>
    );
  }
}

export default App;
