import React, { Component } from 'react'

class Dropdown extends Component{
  render(){
    return(
      <div>
        <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {this.props.product}
          </p>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><p className="dropdown-item" >{this.props.productItem}</p></li>
          </ul>
        </li>
      </div>
    )
  }
}

class Nav extends Component {
  render() {
    return (
      <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <p className="navbar-brand" >Navbar</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p className="nav-link active" aria-current="page" >Home</p>
        </li>
        
        <Dropdown  product="PC" productItem="MSI"/>
        <Dropdown  product="NoteBook" productItem="Acer"/>
        <Dropdown  product="Phone" productItem="Asus"/>
     
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Nav