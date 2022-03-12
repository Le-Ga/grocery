import { Component } from "react";
import icon from "./img/icons/shopping-bag.svg";

export class GroceryList extends Component {
  state = {
    userInput: "",
    groceryList: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addItem(input) {
    if (input === "") {
      alert("Enter item!");
    } else {
      let listArray = this.state.groceryList;
      listArray.push(input);
      this.setState({ groceryList: listArray, userInput: "" });
      console.log(listArray);
    }
  }

  crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }

  deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({ groceryList: listArray });
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="grocery-container">
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input
              type="text"
              placeholder="What do you want to buy today?"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            />
          </div>
          <div className="btn btn-add">
            <button onClick={() => this.addItem(this.state.userInput)}>
              Add
            </button>
          </div>
          <ul>
            {this.state.groceryList.map((item, index) => (
              <li onClick={this.crossedWord} key={index}>
                <img src={icon} alt="check" width="25px" />
                {item}
              </li>
            ))}
          </ul>
          <div className="btn btn-del">
            <button onClick={() => this.deleteItem()}>Clear list</button>
          </div>
        </form>
      </div>
    );
  }
}
