import React, { Component } from "react";
import Card from "./Product";
import img1 from "../assets/img/cardImg.jpg";
import img2 from "../assets/img/cardImg1.jpg";
import img3 from "../assets/img/cardImg2.jpg";

class Products extends Component {
  render() {
    return (
      <div className="products">
        <div className="row">
          <div className="card-group">
            <Card title="Prodcut 1" photo={img1} />
            <Card title="Prodcut 2" photo={img2} />
            <Card title="Prodcut 3" photo={img3} />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
