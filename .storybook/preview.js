import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '/src/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '/src/components/app/styled';

const preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
