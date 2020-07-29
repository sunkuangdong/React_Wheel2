import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconDemo from "./lib/icon/icon.demo";
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Aside, Footer, Header, Layout, Content} from './lib/layout/layout';
import './example.scss';

const logo = require('./logo.png').default;

ReactDom.render((
  <Router>
    <Layout className={'site-page'}>
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="80px" height="80px" alt=""/>
          <span>SUI</span>
        </div>
      </Header>
      <Layout>
        <Aside className={"site-aside"}>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout布局</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className={"site-main"}>
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className={"site-footer"}>
        &copy; 孙匡东
      </Footer>
    </Layout>
  </Router>
), document.querySelector('#root'));