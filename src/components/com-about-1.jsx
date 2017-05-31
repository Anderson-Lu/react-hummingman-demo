import React, {Component} from 'react'
import '../css/com-about-1.css'

export default class ComAboutOne extends Component {
  render () {
    return (
      <div className='about'>
        <div className='about-right-div'>
          <div className='about-right-div-dog' />
          <div className='about-right-div-intro' >
            <h3>关于我：</h3>
            <p>一位90后技术极客爱好者，全栈是我的理想，CTO是我的目标，目前从事DOTNET开发</p>
            <p>世界那么大，我想到处去走走，沿途的风景很美好</p>
            <p>喜欢通过学习丰富自己的技术栈：
              <ul>
                <li>后端: Java、c#</li>
                <li>前端: Html、Css、JS、JQ、React、Vue</li>
                <li>存储: MySQL、Oracle、SQL Sever、Mongo、PostgresSQL、Redis</li>
                <li>博客: Hexo </li>
                <li>脚本: Batch、Shell、Groovy</li>
                <li>构建: Nuget、Gradle</li>
                <li>框架: SpringBoot、.NetCore</li>
                <li>版本：SVN、Git</li>
              </ul>
            </p>
            <p>胡乱写过的作品:
              <ul>
                <li>基于Socket的聊天室（Kchat）</li>
                <li>基于Winform的进程调度模拟程序（ProcessSimulator）</li>
                <li>基于SSH框架的酒店管理系统（AttackOA）</li>
                <li>基于SpringBoot的旅游网站（黄山旅游）</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    )
  };
}
