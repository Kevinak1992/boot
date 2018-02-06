import React, { Component } from 'react';

/**
 * 定义 Home 组件
 * */
class Home extends Component {
  /**
   * 渲染组件
   * */
  render() {
    return (
      <div className="home">
        <h1>Welcome Home!</h1>
      </div>
    );
  }
}

/**
 * 定义组件属性类型
 * */
Home.propTypes = {};

/**
 * 定义组件默认属性
 * */
Home.defaultProps = {};

export { Home };
export default Home;
