import { Header } from './layouts/Header';
import { Home } from './pages/home';
import { initializeEventManager } from './utils';

export const App = () => {
  return ` ${Header()} ${Home()}`;
};

initializeEventManager();
