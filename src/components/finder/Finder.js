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
            <div className='left-panel handle'>

            </div>
            <div className='right-panel'>
              <div className='top-panel handle'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#b4b4b4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="5" y1="12" x2="11" y2="18" />
                    <line x1="5" y1="12" x2="11" y2="6" />
                  </svg>
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#5a5a5a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="13" y1="18" x2="19" y2="12" />
                    <line x1="13" y1="6" x2="19" y2="12" />
                  </svg>
                </span>
                <span className='directory-title'>
                  Desktop
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="32" height="32" viewBox="0 0 48 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="4" x2="12" y2="20" />
                    <line x1="20" y1="4" x2="20" y2="20" />
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="24" height="16" rx="2" />
                    <line x1="40" y1="4" x2="36" y2="8" />
                    <line x1="40" y1="4" x2="44" y2="8" />
                    <line x1="36" y1="16" x2="40" y2="20" />
                    <line x1="40" y1="20" x2="44" y2="16" />
                  </svg>
                </span>
                
              </div>
              <div className='main-panel'>

              </div>
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}

export default Finder