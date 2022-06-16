import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount function to start the app
export const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// in development
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#marketing_dev_root');
  if (devRoot) {
    mount(devRoot);
  }
}
