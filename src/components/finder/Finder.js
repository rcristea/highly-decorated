import React, { Component, createRef } from 'react'
import './Finder.css'
import Draggable from 'react-draggable'

export class Finder extends Component {
  constructor(props) {
    super(props)

    this.nodeRef = createRef()

    this.setState = {
      directory: this.props.directory
    }
  }

  render() {
    return (
      <Draggable 
        nodeRef={this.nodeRef}
        handle='.handle'
      >
        <div className='finder-container' ref={this.nodeRef}>
          <div className='finder'>
            <div class='left-panel handle'>

            </div>
            <div class='right-panel'>
              <div class='top-panel handle'>

              </div>
              <div class='main-panel'>

              </div>
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}

export default Finder