import React, { Component } from 'react'
import './Home.css'
import { MenuBar } from '../menu-bar/MenuBar'
import { Dock } from '../dock/Dock'
import { Finder } from '../finder/Finder'
import background from '../../assets/mac_bigsur.jpeg'
import Directory from '../directory/Directory'


export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showRareEP: false,
      showNewContent: false,
      showNewSamples: false
    }

    this.setRareEP = this.setRareEP.bind(this)
    this.setNewContent = this.setNewContent.bind(this)
    this.setNewSamples = this.setNewSamples.bind(this)
  }

  setRareEP() {
    this.setState(prevState => ({
      showRareEP: !prevState.showRareEP
    }))
  }

  setNewContent() {
    this.setState(prevState => ({
      showNewContent: !prevState.showNewContent
    }))
  }

  setNewSamples() {
    this.setState(prevState => ({
      showNewSamples: !prevState.showNewSamples
    }))
  }

  render() {
    return (
      <div>
        <MenuBar />
        <div className='home-container'>
          <div className='home-screen' style={{backgroundImage:`url(${background})`}}></div>
          <Directory name='RARE&nbsp;EP' id='rare-ep' onClick={this.setRareEP}/>
          <Directory name='NEW&nbsp;SAMPLES' id='new-samples' onClick={this.setNewSamples} />
          <Directory name='NEW&nbsp;CONTENT' id='new-content' onClick={this.setNewContent} />
          { this.state.showRareEP && <Finder directory='rare-ep' directoryName='RARE&nbsp;EP'/> }
          { this.state.showNewContent && <Finder directory='new-content' directoryName='NEW&nbsp;CONTENT'/> }
          { this.state.showNewSamples && <Finder directory='new-samples' directoryName='NEW&nbsp;SAMPLES'/> }
        </div>
        <Dock />
      </div>
    )
  }
}

export default Home