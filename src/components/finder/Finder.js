import React, { Component, createRef } from 'react'
import './Finder.css'
import Draggable from 'react-draggable'
import { FinderDirectory } from '../finder-directory/FinderDirectory'
import AirDropSVG from '../../assets/svg/airdrop.svg'
import ClockSVG from '../../assets/svg/clock.svg'
import AppStoreSVG from '../../assets/svg/appstore.svg'
import DesktopSVG from '../../assets/svg/desktop.svg'
import FileSVG from '../../assets/svg/file.svg'
import DownloadSVG from '../../assets/svg/download.svg'
import MusicSVG from '../../assets/svg/music.svg'
import HomeSVG from '../../assets/svg/home.svg'
import folder from '../../assets/mac_bigsur_folder.png'

export class Finder extends Component {
  constructor(props) {
    super(props)

    this.nodeRef = createRef()

    this.state = {
      directory: this.props.directory,
      directoryName: this.props.directoryName
    }

    this.fullscreen = this.fullscreen.bind(this)
  }

  fullscreen() {
    if (this.nodeRef.current.style.width === '100%') {
      this.nodeRef.current.style.width = '850px'
      this.nodeRef.current.style.height = '400px'
      this.nodeRef.current.style.top = '15%'
      this.nodeRef.current.style.left = '10%'
    } else {
      this.nodeRef.current.style.width = '100%'
    this.nodeRef.current.style.height = '95%'
    this.nodeRef.current.style.top = '30px'
    this.nodeRef.current.style.left = '0'
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
              <div className='window-buttons'>
                <div className='circle-button circle-button-close' onClick={this.props.onClick}></div>
                <div className='circle-button circle-button-minimize' onClick={this.props.onClick}></div>
                <div className='circle-button circle-button-fullscreen' onClick={this.fullscreen}></div>
              </div>
              <div className='left-panel-heading-container'>
                <span className='left-panel-heading'>Favorites</span>
              </div>
              <div className='left-panel-icon'>
                <img src={AirDropSVG} alt='Airdrop icon'/>
                <span>AirDrop</span>
              </div>
              <div className='left-panel-icon'>
                <img src={ClockSVG} alt='Clock icon'/>
                <span>Recents</span>
              </div>
              <div className='left-panel-icon'>
                <img src={AppStoreSVG} alt='Apple app store icon'/>
                <span>Applications</span>
              </div>
              <div className='left-panel-icon active'>
                <img src={DesktopSVG} alt='Desktop icon'/>
                <span>Desktop</span>
              </div>
              <div className='left-panel-icon'>
                <img src={FileSVG} alt='File icon'/>
                <span>Documents</span>
              </div>
              <div className='left-panel-icon'>
                <img src={DownloadSVG} alt='Download icon'/>
                <span>Downloads</span>
              </div>
              <div className='left-panel-icon'>
                <img src={MusicSVG} alt='Music icon'/>
                <span>Music</span>
              </div>
              <div className='left-panel-icon'>
                <img src={HomeSVG} alt='Home icon'/>
                <span>highlydeco...</span>
              </div>
              <div className='left-panel-heading-container mt-15'>
                <span className='left-panel-heading'>Tags</span>
              </div>
              <div className='left-panel-icon'>
                <div className='circle-button color-red'></div>
                <span>Red</span>
              </div>
              <div className='left-panel-icon'>
                <div className='circle-button color-orange'></div>
                <span>Orange</span>
              </div>
            </div>
            <div className='right-panel'>
              <div className='top-panel handle'>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-arrow-left' width='32' height='32' viewBox='0 0 24 24' strokeWidth='1' stroke='#b4b4b4' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                    <line x1='5' y1='12' x2='11' y2='18' />
                    <line x1='5' y1='12' x2='11' y2='6' />
                  </svg>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-arrow-right' width='32' height='32' viewBox='0 0 24 24' strokeWidth='1' stroke='#5a5a5a' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                    <line x1='13' y1='18' x2='19' y2='12' />
                    <line x1='13' y1='6' x2='19' y2='12' />
                  </svg>
                </span>
                <span className='directory-title'>
                  {this.props.directoryName}
                </span>
                <span className='top-panel-icon'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-layout-columns' width='32' height='32' viewBox='0 0 48 24' strokeWidth='1.5' stroke='#b4b4b4' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                    <line x1='12' y1='4' x2='12' y2='20' />
                    <line x1='20' y1='4' x2='20' y2='20' />
                    <rect x='4' y='4' width='24' height='16' rx='2' />
                    <line x1='40' y1='4' x2='36' y2='8' />
                    <line x1='40' y1='4' x2='44' y2='8' />
                    <line x1='36' y1='16' x2='40' y2='20' />
                    <line x1='40' y1='20' x2='44' y2='16' />
                  </svg>
                </span>
                <span className='top-panel-icon'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-layout-columns' width='32' height='32' viewBox='0 0 48 24' strokeWidth='1.5' stroke='#b4b4b4' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                    <line x1='4' y1='10' x2='30' y2='10' />
                    <rect x='4' y='16' width='6' height='6' rx='2' />
                    <rect x='14' y='16' width='6' height='6' rx='2' />
                    <rect x='24' y='16' width='6' height='6' rx='2' />
                    <line x1='36' y1='12' x2='40' y2='16' />
                    <line x1='40' y1='16' x2='44' y2='12' />
                  </svg>
                </span>
                <span className='top-panel-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="32" height="32" viewBox="0 0 48 24" strokeWidth="1.5" stroke="#b4b4b4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                </span>
              </div>
              <div className='main-panel'>
                <div className='finder-col'>
                  <div className={`finder-row ${this.state.directory === 'rare-ep' ? 'active' : ''}`} onClick={this.props.swapRareEP}>
                    <img src={folder} alt='MacOS BigSur folder icon' width='15px' />
                    <span className='finder-row-directory-name'>RARE EP</span>
                    <span>
                      <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-arrow-right' width='5' height='10' viewBox='0 0 5 10' strokeWidth='1' stroke='#b4b4b4' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                        <line x1='1' y1='1' x2='5' y2='4.5' />
                        <line x1='1' y1='8' x2='5' y2='4.5' />
                      </svg>
                    </span>
                  </div>
                  <div className={`finder-row ${this.state.directory === 'new-content' ? 'active' : ''}`} onClick={this.props.swapNewContent}>
                    <img src={folder} alt='MacOS BigSur folder icon' width='15px' />
                    <span className='finder-row-directory-name'>NEW CONTENT</span>
                    <span>
                      <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-arrow-right' width='5' height='10' viewBox='0 0 5 10' strokeWidth='1' stroke='#b4b4b4' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                        <line x1='1' y1='1' x2='5' y2='4.5' />
                        <line x1='1' y1='8' x2='5' y2='4.5' />
                      </svg>
                    </span>
                  </div>
                  <div className={`finder-row ${this.state.directory === 'new-samples' ? 'active' : ''}`} onClick={this.props.swapNewSamples}>
                    <img src={folder} alt='MacOS BigSur folder icon' width='15px' />
                    <span className='finder-row-directory-name'>NEW SAMPLES</span>
                    <span>
                      <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-arrow-right' width='5' height='10' viewBox='0 0 5 10' strokeWidth='1' stroke='#b4b4b4' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
                        <line x1='1' y1='1' x2='5' y2='4.5' />
                        <line x1='1' y1='8' x2='5' y2='4.5' />
                      </svg>
                    </span>
                  </div>
                </div>
                <FinderDirectory directory={this.state.directory} />
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}

export default Finder