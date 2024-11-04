import './index.css';

import { createRoot } from 'react-dom/client';

import { App } from './App';
import { FiltersProvider } from './context/filterProvider';

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
