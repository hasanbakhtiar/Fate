import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
     
      <footer className="bg-light text-center text-lg-start">
        {/* Copyright */}
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
         {new Date().getFullYear()} Copyright:
          <a className="text-dark" href="#">By Hasan</a>
        </div>
        {/* Copyright */}
      </footer>
    )
  }
}

export default Footer