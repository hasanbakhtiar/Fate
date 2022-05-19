import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/sass/style.css";
import Products from "./components/Products";
import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Products />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
