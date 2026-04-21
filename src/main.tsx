import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n';

const container = document.getElementById('root')!

// When react-snap pre-renders the page, the container already has HTML.
// Use hydrateRoot to attach React to the existing DOM without re-rendering.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
