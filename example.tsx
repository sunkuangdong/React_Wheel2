import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import ButtonDemo from './lib/button/button.demo';
import DialogDemo from './lib/dialog/dialog.demo';
import LayoutDemo from './lib/layout/layout.demo';
import { Aside, Footer, Header, Layout, Content } from './lib/layout/layout';
import FormDemo from './lib/form/form.demo';
import ScrollDemo from './lib/scroll/scroll.demo';
import TreeDemo from './lib/tree/tree.demo';
import CitySelectDemo from "./lib/citySelect/city.demo";
import './example.scss';

const logo = require('./logo.png').default;

ReactDom.render((
  <Router>
    <Layout className={'site-page'}>
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="60px" height="60px" alt="" />
          <span>SUN UI</span>
        </div>
      </Header>
      <Layout>
        <Aside className={'site-aside'}>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon 图标</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button 按钮</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog 对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout 布局</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form 表单</NavLink>
            </li>
            <li>
              <NavLink to="/scroll">Scroll 滚动加载</NavLink>
            </li>
            <li>
              <NavLink to="/tree">Tree 树形控件</NavLink>
            </li>
            <li>
              <NavLink to="/citySelect">City 城市组件</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className={'site-main'}>
          <Route path="/icon" component={IconDemo} />
          <Route path="/button" component={ButtonDemo} />
          <Route path="/dialog" component={DialogDemo} />
          <Route path="/layout" component={LayoutDemo} />
          <Route path="/form" component={FormDemo} />
          <Route path="/scroll" component={ScrollDemo} />
          <Route path="/tree" component={TreeDemo} />
          <Route path="/citySelect" component={CitySelectDemo} />
        </Content>
      </Layout>
      <Footer className={'site-footer'}>
        &copy; 孙匡东
      </Footer>
    </Layout>
  </Router>
), document.querySelector('#root'));