import React, { Component, createRef } from 'react'
import './Landing.css'

import background from '../../assets/background.jpeg'
import pfp from '../../assets/hd_pfp.png'

export class Landing extends Component {
  isPasswordFilled = false

  constructor(props) {
    super(props)

    this.passwordRef = createRef()
  }

  animatePassword = event => {
    if (!this.isPasswordFilled) {
      var password = 'password'
      password.split('').forEach(function(elem, index) {
        setTimeout(function() {
          this.passwordRef.current.value = this.passwordRef.current.value + elem;
        }.bind(this), index * 100)
      }, this)

      this.isPasswordFilled = true
    }
  }

  render() {
    return (
      <div className='login-container'>
        <div className='login-screen' style={{backgroundImage:`url(${background})`}}></div>
        <div className='login-form-container'>
          <img src={pfp} alt='Highly Decorated Logo' className='login-img'></img>
          <h1 className='login-name'>Highly Decorated</h1>
          <form className='login-form'>
            <input 
              ref={this.passwordRef}
              type='password'
              placeholder='Enter Password'
              onClick={this.animatePassword}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Landing