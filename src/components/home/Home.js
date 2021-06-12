import React, { Component } from 'react'
import './Home.css'

import { MenuBar } from '../menu-bar/MenuBar'

export class Home extends Component {
  render() {
    return (
      <div>
        <MenuBar />
      </div>
    )
  }
}

export default Home