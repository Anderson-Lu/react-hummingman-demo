import React, { Component } from 'react'
import ComHeader from './components/com-header'
import ComHomeOne from './components/com-home-1'
import ComTravleOne from './components/com-travel-1'
import ComTechOne from './components/com-tech-1'
import ComAppOne from './components/com-app-1'
import ComAboutOne from './components/com-about-1'
import ComLoginOne from './components/com-login-1'
import ComFooterOne from './components/com-footer-1'

import './App.css'
import './css/animate.css'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      headerIndex: window.localStorage.getItem('headerIndex') || 1,
      warpHeight: 0
    }
  }

  renderIndex (index) {
    window.localStorage.setItem('headerIndex', index)
    this.setState({
      headerIndex: index
    })
    this.renderApp()
  }

  renderApp () {
    switch (this.state.headerIndex) {
      case '':
      case '1' :
        return (
          <ComHomeOne />
        )
      case '2' :
        return (
          <ComTravleOne />
        )
      case '3' :
        return (
          <ComTechOne />
        )
      case '4':
        return (
          <ComAppOne />
        )
      case '5':
        return (
          <ComAboutOne />
        )
      case '6':
        return (
          <ComLoginOne />
        )
      default:
        return (
          <ComHomeOne />
        )
    }
  }

  render () {
    return (
      <div className=''>
        <div className='block header'>
          <ComHeader renderIndex={this.renderIndex.bind(this)} headerIndex={this.state.headerIndex} />
        </div>
        <div className='block warp' style={{'minHeight': this.state.warpHeight}}>
          {this.renderApp()}
        </div>
        <div className='block footer'>
          <ComFooterOne />
        </div>
      </div>
    )
  }

  componentDidMount () {
    console.log('1222')
  }
}
