import React, { Component, createRef } from 'react'
import './Directory.css'
import Draggable from 'react-draggable'
import folder from '../../assets/mac_bigsur_folder.png'

export class Directory extends Component {
  constructor(props) {
    super(props)

    this.nodeRef = createRef()
    this.imageRef = createRef()

    this.state = {
      dragging: false,
      name: this.props.name,
      id: this.props.id
    }

    this.onClick = this.onClick.bind(this)
    this.onDrag = this.onDrag.bind(this)
    this.onStop = this.onStop.bind(this)
  }

  componentDidMount() {
    this.imageRef.current.setAttribute('draggable', false)
  }

  onClick(e) {
    alert(this.props.id)
  }

  onDrag() {
    this.setState({dragging: true})
  }

  onStop(...args) {
    const { dragging } = this.state
    this.setState({dragging: false})
    if (!dragging) {
      this.onClick(...args)
    }
  }

  render() {
    return (
      <Draggable 
        nodeRef={this.nodeRef}
        onDrag={this.onDrag}
        onStop={this.onStop}
      >
        <div className={`drag-box ${ this.props.id }`} ref={this.nodeRef}>
          <div className='dir-icon'>
            <img src={folder} alt='MacOS BigSur Folder Icon' ref={this.imageRef}/>
          </div>
          <p className='dir-name'>{this.state.name}</p>
        </div>
      </Draggable>
    )
  }
}

export default Directory