import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// COMPONENTS //
import App from './components/App';

// ReactDOM.render(<h1>hello from index.js</h1>, document.getElementById('react-node'));

document.addEventListener("DOMContentLoaded", () => {
  const reactNode = document.getElementById("react-node");

  if (reactNode) {
    ReactDOM.render(
      <App />
      , reactNode)
  }
});