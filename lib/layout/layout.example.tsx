import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './layout.example.scss';

export default function () {
  return (
    <div>
      <div>
        <Layout style={{height: '40vh', width: '50vw'}}>
          <Header className={'header publish'}>header</Header>
          <Content className={'content'}>content</Content>
          <Footer className={'footer publish'}>Footer</Footer>
        </Layout>
      </div>
    </div>
  );
};