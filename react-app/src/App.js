import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

let root = null;

export const mount = (container) => {
  root = createRoot(container);
  root.render(<App />);
};

export const unmount = () => {
  root.unmount();
};