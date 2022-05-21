import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Mode from "./components/Mode";
// import Counter from "./components/Counter";
// import BookStore from "./components/BookStore";


class App extends Component {
  render() {
    return (
      <div className="container mt-5">
       {/* <BookStore /> */}
       {/* <Counter /> */}
       <Mode />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
