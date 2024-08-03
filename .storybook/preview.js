/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '/src/themes/default';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];

const preview = {
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
