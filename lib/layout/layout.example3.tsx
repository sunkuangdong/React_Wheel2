import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss';

export default function () {
  return (
    <div>
      <div>
        <Layout style={{height: '40vh', width: '50vw'}}>
          <Header className={'header publish'}>header</Header>
          <Layout>
            <Content className={'content'}>content</Content>
            <Aside className={'aside'}>aside</Aside>
          </Layout>
          <Footer className={'footer publish'}>Footer</Footer>
        </Layout>
      </div>
    </div>
  );
};