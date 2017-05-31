import React, { Component } from 'react'
import '../css/com-home-1.css'
import '../css/animate.css'

export default class ComeHomeOne extends Component {
  constructor (props) {
    super(props)
    this.state = {
      headerInfo: this.apiGetHanderInfo()
    }
  }

  apiGetHanderInfo () {
    return {
      title: '新版重制归来',
      date: '2017-05-24',
      content: '怀着一颗瞎折腾的心，新版博客重制归来。与以往不同的是，这次完全摒弃了Hexo提供的博客模板，转而从头开始开发了本次改版后的个人网站，从前端到后端，从GITHUB到阿里服务器，希望折腾到底！'
    }
  }

  apiGetAppStores () {
    var apps = [
      'Tiny time',
      'Process Simulator',
      'Kchat',
      'Auto Poweroff',
      'System Detector',
      'Attach OA',
      'Calc Mini',
      'My Story'
    ]
    return apps.map((app) =>
      <li key={app.toString()} onClick={this.eventHandleOnClickApp}>{app}</li>
    )
  }

  apiGetLatestNews () {
    var news = [
      '2017-05-24 博客框架搭建完成1',
      '2017-05-24 添加字数统计插件（新版主题已废弃此插件）',
      '2017-05-24 添加文章别名访问插件/示例插件/图片插件（新版本主题已废弃此插件）',
      '2017-05-24 加入访问地图功能(新版本主题已废弃此插件)',
      '2017-05-24 加入Github卡片',
      '2017-05-24 首页副标题加入滚动字幕(新版主题已废弃此效果)',
      '2017-05-24 加入下载页面',
      '2017-05-24 主题切换（Material）',
      '2017-05-24 加入日志页面'
    ]
    return news.map(item =>
      <li key={item.toString()}>{item}</li>
    )
  }

  eventHandleOnClickApp () {
    console.log('ss')
  }

  render () {
    return (
      <div className='com-home-1-div'>
        <div className='com-home-1-div-top'>
          <div className='com-home-1-div-top-left'>
            <h2>{this.state.headerInfo.title}</h2>
            <h6>{this.state.headerInfo.date}</h6>
          </div>
          <div className='com-home-1-div-top-right'>
            <p>{this.state.headerInfo.content}</p>
          </div>
        </div>
        <div className='com-home-1-div-middle'>
          <div className='com-home-1-div-middle-left'>
            <div className='com-home-1-div-middle-left-msg-header'>
              <img alt='z' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxMy4xODQgNDEzLjE4NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDEzLjE4NCA0MTMuMTg0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPHBhdGggZD0iTTIwNi41ODQsMEMxMDMuNTc4LDAsMjIuODg2LDM0Ljc5LDIyLjg4Niw3OS4yMTN2NDMuMjM2YzAsNDQuNDA2LDgwLjY5Miw3OS4xOTcsMTgzLjY5OCw3OS4xOTcgICBjMTAzLjAxMywwLDE4My43MTQtMzQuNzksMTgzLjcxNC03OS4xOTdWNzkuMjEzQzM5MC4yOTgsMzQuNzksMzA5LjU5NywwLDIwNi41ODQsMHogTTM3NC4wNCwxMjIuNDQxICAgYzAsMzcuMDkxLTg4LjI0NCw2Mi45NC0xNjcuNDU3LDYyLjk0Yy03OS4xOTcsMC0xNjcuNDQxLTI1Ljg0OS0xNjcuNDQxLTYyLjk0Vjc5LjIwNWMwLTM3LjA5OSw4OC4yMzYtNjIuOTU2LDE2Ny40NDEtNjIuOTU2ICAgUzM3NC4wNCw0Mi4xMDYsMzc0LjA0LDc5LjIwNVYxMjIuNDQxeiIgZmlsbD0iIzdiN2E3YSIvPgoJPHBhdGggZD0iTTMxLjAxNSwxNzMuOTkyYy00LjQ5NSwwLTguMTI5LDMuNjQyLTguMTI5LDguMTI5djQzLjIzNmMwLDQ0LjQwNiw4MC42OTIsNzkuMTk3LDE4My42OTgsNzkuMTk3ICAgYzEwMy4wMTMsMCwxODMuNzE0LTM0Ljc5LDE4My43MTQtNzkuMTk3di00My4yMzZjMC00LjQ4Ny0zLjYzMy04LjEyOS04LjEyOS04LjEyOWMtNC40OTUsMC04LjEyOSwzLjY0Mi04LjEyOSw4LjEyOXY0My4yMzYgICBjMCwzNy4wOTEtODguMjQ0LDYyLjk0LTE2Ny40NTcsNjIuOTRjLTc5LjE5NywwLTE2Ny40NDEtMjUuODQ5LTE2Ny40NDEtNjIuOTR2LTQzLjIzNiAgIEMzOS4xNDMsMTc3LjYzNCwzNS41MSwxNzMuOTkyLDMxLjAxNSwxNzMuOTkyeiIgZmlsbD0iIzdiN2E3YSIvPgoJPHBhdGggZD0iTTIyLjg4NiwzMzMuOTk1YzAsNDQuNDA2LDgwLjY5Miw3OS4xODksMTgzLjY5OCw3OS4xODljMTAzLjAxMywwLDE4My43MTQtMzQuNzgyLDE4My43MTQtNzkuMTg5ICAgdi00My4yMzZjMC00LjQ4Ny0zLjYzMy04LjEyOS04LjEyOS04LjEyOWMtNC40OTUsMC04LjEyOSwzLjY0Mi04LjEyOSw4LjEyOXY0My4yMzZjMCwzNy4wODMtODguMjQ0LDYyLjkzMS0xNjcuNDU3LDYyLjkzMSAgIGMtNzkuMTk3LDAtMTY3LjQ0MS0yNS44NDktMTY3LjQ0MS02Mi45MzF2LTQzLjIzNmMwLTQuNDg3LTMuNjMzLTguMTI5LTguMTI5LTguMTI5cy04LjEyOSwzLjY0Mi04LjEyOSw4LjEyOSAgIEMyMi44ODYsMjkwLjc1OSwyMi44ODYsMzMzLjk5NSwyMi44ODYsMzMzLjk5NXoiIGZpbGw9IiM3YjdhN2EiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K' />
              <h5>杂货店</h5>
            </div>
            <div className='com-home-1-div-middle-left-msg-list'>
              <ul>
                {this.apiGetAppStores()}
              </ul>
            </div>
          </div>
          <div className='com-home-1-div-middle-right'>
            <div className='com-home-1-div-middle-right-msg-header'>
              <img alt='Z' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxMy4xODQgNDEzLjE4NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDEzLjE4NCA0MTMuMTg0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPHBhdGggZD0iTTIwNi41ODQsMEMxMDMuNTc4LDAsMjIuODg2LDM0Ljc5LDIyLjg4Niw3OS4yMTN2NDMuMjM2YzAsNDQuNDA2LDgwLjY5Miw3OS4xOTcsMTgzLjY5OCw3OS4xOTcgICBjMTAzLjAxMywwLDE4My43MTQtMzQuNzksMTgzLjcxNC03OS4xOTdWNzkuMjEzQzM5MC4yOTgsMzQuNzksMzA5LjU5NywwLDIwNi41ODQsMHogTTM3NC4wNCwxMjIuNDQxICAgYzAsMzcuMDkxLTg4LjI0NCw2Mi45NC0xNjcuNDU3LDYyLjk0Yy03OS4xOTcsMC0xNjcuNDQxLTI1Ljg0OS0xNjcuNDQxLTYyLjk0Vjc5LjIwNWMwLTM3LjA5OSw4OC4yMzYtNjIuOTU2LDE2Ny40NDEtNjIuOTU2ICAgUzM3NC4wNCw0Mi4xMDYsMzc0LjA0LDc5LjIwNVYxMjIuNDQxeiIgZmlsbD0iIzdiN2E3YSIvPgoJPHBhdGggZD0iTTMxLjAxNSwxNzMuOTkyYy00LjQ5NSwwLTguMTI5LDMuNjQyLTguMTI5LDguMTI5djQzLjIzNmMwLDQ0LjQwNiw4MC42OTIsNzkuMTk3LDE4My42OTgsNzkuMTk3ICAgYzEwMy4wMTMsMCwxODMuNzE0LTM0Ljc5LDE4My43MTQtNzkuMTk3di00My4yMzZjMC00LjQ4Ny0zLjYzMy04LjEyOS04LjEyOS04LjEyOWMtNC40OTUsMC04LjEyOSwzLjY0Mi04LjEyOSw4LjEyOXY0My4yMzYgICBjMCwzNy4wOTEtODguMjQ0LDYyLjk0LTE2Ny40NTcsNjIuOTRjLTc5LjE5NywwLTE2Ny40NDEtMjUuODQ5LTE2Ny40NDEtNjIuOTR2LTQzLjIzNiAgIEMzOS4xNDMsMTc3LjYzNCwzNS41MSwxNzMuOTkyLDMxLjAxNSwxNzMuOTkyeiIgZmlsbD0iIzdiN2E3YSIvPgoJPHBhdGggZD0iTTIyLjg4NiwzMzMuOTk1YzAsNDQuNDA2LDgwLjY5Miw3OS4xODksMTgzLjY5OCw3OS4xODljMTAzLjAxMywwLDE4My43MTQtMzQuNzgyLDE4My43MTQtNzkuMTg5ICAgdi00My4yMzZjMC00LjQ4Ny0zLjYzMy04LjEyOS04LjEyOS04LjEyOWMtNC40OTUsMC04LjEyOSwzLjY0Mi04LjEyOSw4LjEyOXY0My4yMzZjMCwzNy4wODMtODguMjQ0LDYyLjkzMS0xNjcuNDU3LDYyLjkzMSAgIGMtNzkuMTk3LDAtMTY3LjQ0MS0yNS44NDktMTY3LjQ0MS02Mi45MzF2LTQzLjIzNmMwLTQuNDg3LTMuNjMzLTguMTI5LTguMTI5LTguMTI5cy04LjEyOSwzLjY0Mi04LjEyOSw4LjEyOSAgIEMyMi44ODYsMjkwLjc1OSwyMi44ODYsMzMzLjk5NSwyMi44ODYsMzMzLjk5NXoiIGZpbGw9IiM3YjdhN2EiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K' />
              <h5>最新动态</h5>
            </div>
            <div className='com-home-1-div-middle-right-msg-content'>
              <ul>
                {this.apiGetLatestNews()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
