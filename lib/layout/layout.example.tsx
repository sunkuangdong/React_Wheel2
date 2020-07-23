import React from 'react'
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";

export default function () {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout className='hi' style={{height: "20vh"}}>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout className='hi' style={{height: "20vh"}}>
          <Header>header</Header>
          <Layout className=''>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout className='hi' style={{height: "20vh"}}>
          <Header>header</Header>
          <Layout>
            <Content>content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout className='hi' style={{height: "20vh"}}>
          <Aside>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
};