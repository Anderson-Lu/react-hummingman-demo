import React, {Component} from 'react'
import '../css/com-login-1.css'

export default class ComLoginOne extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loginEmail: '',
      loginPassword: '',
      registerConfirmPassword: '',
      loginPanelToggle: 'white',
      registPanelToggle: '',
      isLogin: true,
      isRegister: false,
      footerTitle: '您正在登录HummingMan帐号',
      buttonContent: '登录',
      confirmPassword: ''
    }
  }
  evnetHandleLoginClick () {
    console.log(this.state.loginEmail)
  }

  eventHandleLoginInfoChange (e) {
    var type = e.target.dataset.type
    console.log(type)
    if (type === '1') {
      this.setState({'loginEmail': e.target.value})
    }
    if (type === '2') {
      this.setState({'loginPassword': e.target.value})
    }
    if (type === '3') {
      this.setState({'registerConfirmPassword': e.target.value})
    }
  }

  eventHandlePageTabClick (e) {
    var type = e.target.dataset.type
    if (type === '1') {
      this.setState({
        'loginPanelToggle': 'white',
        'registPanelToggle': '',
        'footerTitle': '您正在登录HummingMan帐号',
        'buttonContent': '登录',
        'isLogin': true,
        'isRegister': false
      })
    }
    if (type === '2') {
      this.setState({
        'loginPanelToggle': '',
        'registPanelToggle': 'white',
        'footerTitle': '您正在注册HummingMan帐号',
        'buttonContent': '注册',
        'isLogin': false,
        'isRegister': true
      })
    }
  }

  render () {
    return (
      <div className='login'>
        <div className='login-left' />
        <div className='login-right'>
          <div className='login-username-header' >
            HUMMINGMAN
            </div>
          <div className='login-username-div'>
            <input placeholder='邮箱' maxLength='30' value={this.state.loginEmail} onChange={this.eventHandleLoginInfoChange.bind(this)} data-type={1} />
            <input placeholder='密码' maxLength='40' value={this.state.loginPassword} onChange={this.eventHandleLoginInfoChange.bind(this)} data-type={2} type='password' />
            {this.state.isLogin
              ? <span />
              : <input placeholder='确认密码' maxLength='40' value={this.state.registerConfirmPassword} onChange={this.eventHandleLoginInfoChange.bind(this)} data-type={3} type='password' />}
            <button>{this.state.buttonContent}</button>
          </div>
          <div className='login-username-footer' >
            <div className='login-username-footer-pagetab-div'>
              <ul>
                <li data-type={1} className={this.state.loginPanelToggle} onClick={this.eventHandlePageTabClick.bind(this)} />
                <li data-type={2} className={this.state.registPanelToggle} onClick={this.eventHandlePageTabClick.bind(this)} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  };
}
