import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// StrictMode is intentionally off: it mounts pages twice in dev, which would run the
// client's original page scripts twice and double-bind their DOM listeners.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
