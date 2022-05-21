import React, { Component } from "react";
import sefiller from "../assets/img/sefiller.jpg";
import heyvanistan from "../assets/img/heyvanistan.jpg";

class BookStore extends Component {
  constructor(props) {
    super(props);
    this.nextBook=this.nextBook.bind(this);
    this.state={
        img: sefiller,
        bookName: "Sefiller",
        author: "Viktor Hugo",
        pageCount: 1200
    }
  }
  nextBook(){
      this.setState({
        img: heyvanistan,
        bookName: "Heyvanistan",
        author: "Geroge Orwell",
        pageCount: 300
      })
  }
  render() {
    return (
      <div>
        <img src={this.state.img} width="200" alt="err" />
        <h1>{this.state.bookName}</h1>
        <p>Author:{this.state.author}</p>
        <p>Page Count: {this.state.pageCount}</p>
        <button className="btn btn-outline-primary" onClick={this.nextBook}>next book</button>
      </div>
    );
  }
}

export default BookStore;
