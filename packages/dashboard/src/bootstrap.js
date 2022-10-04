import { createApp } from 'vue';
import Dashboard from './components/Dashboard';

// mount function to start the app
export const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// in development
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dashboard_dev_root');
  if (devRoot) {
    mount(devRoot);
  }
}
