import React, { Component, createRef } from 'react'
import './Home.css'
import { MenuBar } from '../menu-bar/MenuBar'
import { Dock } from '../dock/Dock'
import Draggable from 'react-draggable'
import background from '../../assets/mac_bigsur.jpeg'
import folder from '../../assets/mac_bigsur_folder.png'

export class Home extends Component {
  constructor(props) {
    super(props)

    this.nodeRef = createRef()

    this.rareEPRef = createRef()
    this.newContentRef = createRef()
    this.newSamplesRef = createRef()
  }

  componentDidMount() {
    this.rareEPRef.current.setAttribute('draggable', false)
  }

  render() {
    return (
      <div>
        <MenuBar />
        <div className='home-container'>
          <div className='home-screen' style={{backgroundImage:`url(${background})`}}></div>
          <Draggable bounds='parent' nodeRef={this.nodeRef}>
            <div className='drag-box' ref={this.nodeRef}>
              <div className='folder-icon'>
                <img src={folder} alt='MacOS BigSur Folder Icon' ref={this.rareEPRef}/>
              </div>
              <p className='folder-name'>RARE EP</p>
            </div>
          </Draggable>
        </div>
        <Dock />
      </div>
    )
  }
}

export default Home