
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get the repository name from the URL for GitHub Pages
const getBasename = () => {
  // In development, use no basename
  if (import.meta.env.DEV) return '/'
  
  // Check if VITE_BASE_PATH is available (set during GitHub Actions build)
  if (import.meta.env.VITE_BASE_PATH) {
    return `/${import.meta.env.VITE_BASE_PATH}`
  }
  
  // Fallback: try to get the repository name from the URL
  const { pathname } = window.location
  const basenamePath = pathname.split('/').filter(Boolean)[0]
  return basenamePath ? `/${basenamePath}` : '/'
}

createRoot(document.getElementById("root")!).render(
  <App basename={getBasename()} />
);
