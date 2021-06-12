import React, { Component } from 'react'
import './Home.css'
import { MenuBar } from '../menu-bar/MenuBar'
import { Dock } from '../dock/Dock'
import background from '../../assets/mac_bigsur.jpeg'

export class Home extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <div className='home-container'>
          <div className='home-screen' style={{backgroundImage:`url(${background})`}}></div>
        </div>
        <Dock />
      </div>
    )
  }
}

export default Home