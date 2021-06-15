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
    this.swapRareEP = this.swapRareEP.bind(this)
    this.swapNewContent = this.swapNewContent.bind(this)
    this.swapNewSamples = this.swapNewSamples.bind(this)
  }

  setRareEP() {
    this.setState(prevState => ({
      showRareEP: !prevState.showRareEP,
      showNewContent: false,
      showNewSamples: false
    }))
  }

  setNewContent() {
    this.setState(prevState => ({
      showRareEP: false,
      showNewContent: !prevState.showNewContent,
      showNewSamples: false
    }))
  }

  setNewSamples() {
    this.setState(prevState => ({
      showRareEP: false,
      showNewContent: false,
      showNewSamples: !prevState.showNewSamples
    }))
  }

  swapRareEP() {
    this.setState({
      showRareEP: true,
      showNewContent: false,
      showNewSamples: false
    })
  }

  swapNewContent() {
    this.setState({
      showRareEP: false,
      showNewContent: true,
      showNewSamples: false
    })
  }

  swapNewSamples() {
    this.setState({
      showRareEP: false,
      showNewContent: false,
      showNewSamples: true
    })
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
          { this.state.showRareEP && <Finder directory='rare-ep' directoryName='RARE&nbsp;EP' onClick={this.setRareEP} swapRareEP={this.swapRareEP} swapNewContent={this.swapNewContent} swapNewSamples={this.swapNewSamples} /> }
          { this.state.showNewSamples && <Finder directory='new-samples' directoryName='NEW&nbsp;SAMPLES' onClick={this.setNewSamples} swapRareEP={this.swapRareEP} swapNewContent={this.swapNewContent} swapNewSamples={this.swapNewSamples} /> }
          { this.state.showNewContent && <Finder directory='new-content' directoryName='NEW&nbsp;CONTENT' onClick={this.setNewContent} swapRareEP={this.swapRareEP} swapNewContent={this.swapNewContent} swapNewSamples={this.swapNewSamples} /> }
        </div>
        <Dock />
      </div>
    )
  }
}

export default Home