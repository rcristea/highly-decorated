import React, { Component } from 'react'
import './Dock.css'

import finder from '../../assets/mac_bigsur_finder.png'
import photos from '../../assets/mac_bigsur_photos.png'
import messages from '../../assets/mac_bigsur_messages.png'
import mail from '../../assets/mac_bigsur_mail.png'
import music from '../../assets/mac_bigsur_music.png'
import safari from '../../assets/mac_bigsur_safari.png'
import trash from '../../assets/mac_bigsur_trash.png'

export class Dock extends Component {
  render() {
    return (
      <div className='dock-container'>
        <div className='dock'>
          <div className='dock-items'>
            <div className='dock-item hide-mobile'>
              <img src={finder} alt='MacOS BigSur Finder Icon' />
              <div className='dock-dot'></div>
            </div>
            <div className='dock-item'>
              <img src={photos} alt='MacOS BigSur Photos Icon' />
            </div>
            <div className='dock-item'>
              <img src={messages} alt='MacOS BigSur Messages Icon' />
            </div>
            <div className='dock-item hide-mobile'>
              <img src={mail} alt='MacOS BigSur Mail Icon' />
            </div>
            <div className='dock-item'>
              <img src={music} alt='MacOS BigSur Music Icon' />
              <div className='dock-dot'></div>
            </div>
            <div className='dock-item'>
              <img src={safari} alt='MacOS BigSur Safari Icon' />
              <div className='dock-dot'></div>
            </div>
            <div className='vl hide-mobile'></div>
            <div className='dock-item hide-mobile'>
              <img src={trash} alt='MacOS BigSur Trash Icon' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dock