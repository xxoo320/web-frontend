import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 使用 createRoot
import './index.css';  // 全局样式
import App from './App';  // 引入主组件

// 获取根元素并创建根容器
const root = ReactDOM.createRoot(document.getElementById('root'));

// 渲染根组件 App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
