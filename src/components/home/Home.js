import React, { Component } from 'react'
import './Home.css'
import { MenuBar } from '../menu-bar/MenuBar'
import background from '../../assets/mac_catalina.jpeg'

export class Home extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <div className='home-container'>
          <div className='home-screen' style={{backgroundImage:`url(${background})`}}></div>
        </div>
      </div>
    )
  }
}

export default Home