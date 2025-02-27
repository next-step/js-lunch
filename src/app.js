import { BottomSheet } from './components/BottomSheet';
import { MainHeader } from './layouts/MainHeader';
import { Home } from './pages/home';
import { initializeEventManager } from './utils';

export const App = () => {
  return ` ${MainHeader()} ${Home()} ${BottomSheet()}`;
};

initializeEventManager();
