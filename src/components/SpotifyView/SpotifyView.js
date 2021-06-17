import React, { Component } from 'react'
import './SpotifyView.css'

export class SpotifyView extends Component {
  render() {
    return (
      <div className='finder-preview'>
        {this.props.activeSongName === 'reasons' && <iframe title='Reasons - Highly Decorated' src='https://open.spotify.com/embed/track/1I9O8AKIaaZDfeg9OGBUdS' width='100%' height='100%' frameBorder='0' allowtransparency='true' allow='encrypted-media'></iframe>}
        {this.props.activeSongName === 'porcelain' && <iframe title='Porcelain - Highly Decorated' src='https://open.spotify.com/embed/track/6amQhTbxlKHeKVvLqgVWLC' width='100%' height='100%' frameBorder='0' allowtransparency='true' allow='encrypted-media'></iframe>}
      </div>
    )
  }
}

export default SpotifyView