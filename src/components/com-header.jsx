import React, { Component } from 'react'
import '../css/com-header.css'

class ComHeader extends Component {
  constructor (props) {
    super(props)
    var headerIndex = this.props.headerIndex
    var tmpState = {
      index: headerIndex,
      homeClass: '',
      travelClass: '',
      techClass: '',
      appClass: '',
      aboutClass: '',
      loginClass: ''
    }
    if (headerIndex === '1') {
      tmpState.homeClass = 'current-page'
    } else if (headerIndex === '2') {
      tmpState.travelClass = 'current-page'
    } else if (headerIndex === '3') {
      tmpState.techClass = 'current-page'
    } else if (headerIndex === '4') {
      tmpState.appClass = 'current-page'
    } else if (headerIndex === '5') {
      tmpState.aboutClass = 'current-page'
    } else if (headerIndex === '6') {
      tmpState.loginClass = 'current-page'
    }
    this.state = tmpState
  }

  eventHandleHeaderItem (event) {
    var indexStr = event.target.dataset.index
    this.setState({index: indexStr})
    this.props.renderIndex(indexStr)
    this.setState({homeClass: (indexStr.toString() === '1' ? 'current-page' : '')})
    this.setState({travelClass: (indexStr.toString() === '2' ? 'current-page' : '')})
    this.setState({techClass: (indexStr.toString() === '3' ? 'current-page' : '')})
    this.setState({appClass: (indexStr.toString() === '4' ? 'current-page' : '')})
    this.setState({aboutClass: (indexStr.toString() === '5' ? 'current-page' : '')})
    this.setState({loginClass: (indexStr.toString() === '6' ? 'current-page' : '')})
  }

  renderHeaderItems () {
    return (
      <div>
        <a href='#' key={1} className={this.state.homeClass} onClick={this.eventHandleHeaderItem.bind(this)} data-index={1}>主页</a>
        <a href='#' key={2} className={this.state.travelClass} onClick={this.eventHandleHeaderItem.bind(this)} data-index={2}>行走</a>
        <a href='#' key={3} className={this.state.techClass} onClick={this.eventHandleHeaderItem.bind(this)} data-index={3}>技术</a>
        <a href='#' key={4} className={this.state.appClass} onClick={this.eventHandleHeaderItem.bind(this)} data-index={4}>应用</a>
        <a href='#' key={5} className={this.state.aboutClass} onClick={this.eventHandleHeaderItem.bind(this)} data-index={5}>关于</a>
        <a href='#' key={6} className={this.state.loginClass} onClick={this.eventHandleHeaderItem.bind(this)} data-index={6}>登录</a>
      </div>
    )
  }

  render () {
    return (
      <div className='site-header'>
        <div className='warp'>
          <div className='title-area'>
            <h1 className='site-title'>
               HummingMan
             </h1>
          </div>
          <div id='nav'>
            {this.renderHeaderItems()}
          </div>
        </div>
      </div>
    )
  }
}

export default ComHeader
