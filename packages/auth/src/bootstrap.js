import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

// mount function to start the app
export const mount = (el, config) => {
  console.log(config);
  const history = config.defaultHistory
    ? config.defaultHistory
    : createMemoryHistory({
        initialEntries: [config.initialPath],
      });

  if (config?.onNavigate) {
    history.listen(config.onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={config.onSignIn} />, el);
  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname: currentPathname } = history.location;
      console.log('authapp navigate');
      if (currentPathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// in development
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#auth_dev_root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}
