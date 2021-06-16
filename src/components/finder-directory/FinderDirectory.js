import React, { Component, createRef } from 'react'
import './FinderDirectory.css'
import music_icon from '../../assets/mac_bigsur_music.png'

export class FinderDirectory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      directory: this.props.directory
    }
  }

  rareEP() {
    return (
      <div className='finder-col'>
        <div className={`finder-row`}>
          <img src={music_icon} alt='MacOS BigSur folder icon' width='15px' />
          <span className='finder-row-directory-name'>example_001.wav</span>
        </div>
        <div className={`finder-row`}>
          <img src={music_icon} alt='MacOS BigSur folder icon' width='15px' />
          <span className='finder-row-directory-name'>example_002.wav</span>
        </div>
      </div>
    )
  }

  newContent() {
    return (
      <div className='finder-col'>
        <div className={`finder-row`}>
          <img src={music_icon} alt='MacOS BigSur folder icon' width='15px' />
          <span className='finder-row-directory-name'>example_003.wav</span>
        </div>
        <div className={`finder-row`}>
          <img src={music_icon} alt='MacOS BigSur folder icon' width='15px' />
          <span className='finder-row-directory-name'>example_004.wav</span>
        </div>
      </div>
    )
  }

  newSamples() {
    return (
      <div className='finder-col'>
        <div className={`finder-row`}>
          <img src={music_icon} alt='MacOS BigSur folder icon' width='15px' />
          <span className='finder-row-directory-name'>example_005.wav</span>
        </div>
        <div className={`finder-row`}>
          <img src={music_icon} alt='MacOS BigSur folder icon' width='15px' />
          <span className='finder-row-directory-name'>example_006.wav</span>
        </div>
      </div>
    )
  }

  render() {
    if (this.props.directory === 'rare-ep') {
      return this.rareEP()
    } else if (this.props.directory === 'new-content') {
      return this.newContent()
    } else if (this.props.directory === 'new-samples') {
      return this.newSamples()
    }
  }
}

export default FinderDirectory