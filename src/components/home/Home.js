import React, { Component } from 'react'
import './Home.css'
import { MenuBar } from '../menu-bar/MenuBar'
import { Dock } from '../dock/Dock'
import { Finder } from '../finder/Finder'
import background from '../../assets/mac_bigsur.jpeg'
import Directory from '../directory/Directory'


export class Home extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <div className='home-container'>
          <div className='home-screen' style={{backgroundImage:`url(${background})`}}></div>
          <Directory name='RARE&nbsp;EP' id='rare-ep' />
          <Directory name='NEW&nbsp;SAMPLES' id='new-samples' />
          <Directory name='NEW&nbsp;CONTENT' id='new-content' />
          <Finder directory='rare-ep' directoryName='RARE&nbsp;EP'/>
        </div>
        <Dock />
      </div>
    )
  }
}

export default Home