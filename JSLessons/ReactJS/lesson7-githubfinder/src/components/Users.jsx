import React, { Component } from 'react'
import User from './User'

class Users extends Component {
  render() {
    return (
      <div className='container'>
          <div className="row">
              {this.props.uservalue.map(deyer=>(
                  <User istifadeci={deyer}/>

              ))}

          </div>
      </div>
    )
  }
}

export default Users