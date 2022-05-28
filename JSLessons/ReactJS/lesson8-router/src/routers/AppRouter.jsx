import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import NotFoundPage from "../components/pages/NotFoundPage";

class AppRouters extends Component {
  render() {
    return (
      <BrowserRouter>
    <Nav />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route component={NotFoundPage}></Route>
        </Switch>
      <Footer />
      </BrowserRouter>
    );
  }
}

export default AppRouters;