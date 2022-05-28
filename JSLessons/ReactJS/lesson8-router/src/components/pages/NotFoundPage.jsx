import React, { Component } from 'react'
import img from '../../img/nfp.gif'


export class NotFoundPage extends Component {
  render() {
    return (
      <div className='d-flex align-items-center justify-content-center'>
        <img src={img} alt="" />
      </div>
    )
  }
}

export default NotFoundPage