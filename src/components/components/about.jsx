import React, { Component } from 'react';

/**
 * 定义 About 组件
 * */
class About extends Component {
  /**
   * 渲染组件
   * */
  render() {
    return (
      <div className="about">
        <h1>Welcome About!</h1>
      </div>
    );
  }
}

/**
 * 定义组件属性类型
 * */
About.propTypes = {};

/**
 * 定义组件默认属性
 * */
About.defaultProps = {};

export { About };
export default About;
