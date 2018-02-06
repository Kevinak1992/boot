import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Home, About } from './components/index';

/**
 * 定义 App 组件
 * */
class App extends Component {
  /**
   * 渲染组件
   * */
  render() {
    return (
      <div className="app">
        <div className="to-home">
          <Link to="/home">
            <h3>Home</h3>
          </Link>
        </div>
        <div className="to-about">
          <Link to="/about">
            <h3>About</h3>
          </Link>
        </div>
        <hr />
        <Route exact path="/home" component={ Home } />
        <Route path="/about" component={ About } />
      </div>
    );
  }
}

/**
 * 定义组件属性类型
 * */
App.propTypes = {};

/**
 * 定义组件默认属性
 * */
App.defaultProps = {};

export { App };
export default App;
