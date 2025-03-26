import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Get the repository name from the URL for GitHub Pages
const getBasename = () => {
  if (import.meta.env.DEV) return '/'; // Use no basename in development
  if (import.meta.env.VITE_BASE_PATH) {
    return `/${import.meta.env.VITE_BASE_PATH}`;
  }
  const { pathname } = window.location;
  const basenamePath = pathname.split('/').filter(Boolean)[0];
  return basenamePath ? `/${basenamePath}` : '/';
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App basename={getBasename()} />
  </React.StrictMode>
);
