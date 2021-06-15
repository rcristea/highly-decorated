import React, { Component } from 'react'
import './FinderDirectory.css'

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
        
      </div>
    )
  }

  newContent() {
    return (
      <div className='finder-col'>

      </div>
    )
  }

  newSamples() {
    return (
      <div className='finder-col'>
        
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