
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get the repository name from the URL for GitHub Pages
const getBasename = () => {
  // In development, use no basename
  if (import.meta.env.DEV) return '/'
  
  // In production, try to get the repository name from the URL
  const { pathname } = window.location
  const basenamePath = pathname.split('/').filter(Boolean)[0]
  return basenamePath ? `/${basenamePath}` : '/'
}

createRoot(document.getElementById("root")!).render(
  <App basename={getBasename()} />
);
