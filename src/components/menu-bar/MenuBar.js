import React, { Component } from 'react'
import './MenuBar.css'
import Clock from 'react-live-clock'
import { format } from 'date-fns'

import siri from '../../assets/siri.png'

export class MenuBar extends Component {
  render() {
    var date = new Date()
    date = format(date, 'EEE MMM dd')


    return (
      <div className='menu-bar'>
        <div className='menu-bar-left'>
          <div className='apple-icon'>
            <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-brand-apple' width='16' height='16' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#ffffff' fill='none' strokeLinecap='round' strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
              <path fill='#fff' d='M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z' />
              <path d='M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2' />
            </svg>
          </div>
          <span className='menu-main'>Finder</span>
          <span className='menu-item'>File</span>
          <span className='menu-item'>Edit</span>
          <span className='menu-item'>View</span>
          <span className='menu-item'>Go</span>
          <span className='menu-item'>Window</span>
          <span className='menu-item'>Help</span>
        </div>
        <div className='menu-bar-right'>
          <span className='menu-item-right'>
            <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-volume' width='16' height='16' viewBox='0 0 24 24' strokeWidth='2' stroke='#ffffff' fill='none' strokeLinecap='round' strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
              <path d='M15 8a5 5 0 0 1 0 8' />
              <path d='M17.7 5a9 9 0 0 1 0 14' />
              <path fill='#fff' d='M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5' />
            </svg>
          </span>
          <span className='menu-item-right m-0'>
            <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-wifi-2' width='28' height='28' viewBox='0 0 24 28' strokeWidth='2' stroke='#ffffff' fill='none' strokeLinecap='round' strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
              <line x1='12' y1='18' x2='12.01' y2='18' />
              <path d='M9.172 15.172a4 4 0 0 1 5.656 0' />
              <path d='M6.343 12.343a8 8 0 0 1 11.314 0' />
            </svg>
          </span>
          <span className='menu-item-right'><img src={siri} alt='Apple Siri Icon' className='siri-icon' /></span>
          <span className='menu-item-right'>{ date }</span>
          <span className='menu-item-right mr-25'><Clock format={'hh:mm A'} ticking={true} /></span>
        </div>
      </div>
    )
  }
}

export default MenuBar