import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '/src/components/app/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';

const rootElement = createRoot(document.getElementById('root'));

rootElement.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
