import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import ButtonDemo from './lib/button/button.demo';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from './lib/form/form.example';
import ScrollExample from './lib/scroll/scroll.example';
import { Aside, Footer, Header, Layout, Content } from './lib/layout/layout';
import TreeExample from './lib/tree/tree.template';
import CitySelectExample from "./lib/citySelect/citySelect.example";
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
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
          <Route path="/scroll" component={ScrollExample} />
          <Route path="/tree" component={TreeExample} />
          <Route path="/citySelect" component={CitySelectExample} />
        </Content>
      </Layout>
      <Footer className={'site-footer'}>
        &copy; 孙匡东
      </Footer>
    </Layout>
  </Router>
), document.querySelector('#root'));