import { render } from 'react-dom';
import { SprocketUIProvider } from '@sprocket-inc/sprocket-ui';
import { App } from './App';
import './index.css';

const root = document.getElementById('root');
if (root) {
  render(
    <SprocketUIProvider>
      <App />
    </SprocketUIProvider>,
    root
  );
}
