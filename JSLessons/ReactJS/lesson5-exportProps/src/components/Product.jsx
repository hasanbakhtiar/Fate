import React, { Component } from 'react'
 class Product extends Component {
  render() {
    return (
        <div className="card">
        <img src={this.props.photo} className="card-img-top" height="300" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    )
  }
}

export default Product