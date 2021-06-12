import React, { Component, createRef } from 'react'
import { withRouter } from 'react-router'
import './Landing.css'

import background from '../../assets/background.jpeg'
import pfp from '../../assets/hd_pfp.png'

export class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPasswordFilled: props.isPasswordFilled
    }
    this.passwordRef = createRef()
  }

  animatePassword() {
    if (!this.state.isPasswordFilled) {
      var password = 'password'
      password.split('').forEach(function(elem, index) {
        setTimeout(function() {
          this.passwordRef.current.value = this.passwordRef.current.value + elem;
        }.bind(this), index * 100)
      }, this)

      this.setState({
        isPasswordFilled: true
      })

      setTimeout(function() {
        this.props.history.push('home')
      }.bind(this), 900)
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
              onClick={this.animatePassword.bind(this)}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Landing