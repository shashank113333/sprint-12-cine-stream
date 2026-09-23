import '../src/index.css';
import { ReduxProvider } from '../src/store/Providers';

/** @type { import('@storybook/nextjs-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo"
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#05070d' },
        { name: 'light', value: '#f1f5f9' },
        { name: 'cyberpunk', value: '#090014' },
      ],
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for UI components',
      defaultValue: 'dark',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'dark', icon: 'moon', title: 'Dark Mode' },
          { value: 'light', icon: 'sun', title: 'Light Mode' },
          { value: 'cyberpunk', icon: 'lightning', title: 'Cyberpunk Mode' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme || 'dark';
      const bgMap = {
        dark: '#05070d',
        light: '#f1f5f9',
        cyberpunk: '#090014',
      };
      return (
        <ReduxProvider>
          <div
            data-theme={selectedTheme}
            style={{
              padding: '1.5rem',
              minHeight: '100vh',
              backgroundColor: bgMap[selectedTheme] || '#05070d',
              color: selectedTheme === 'light' ? '#0f172a' : '#ffffff',
              transition: 'all 0.3s ease',
            }}
          >
            <Story />
          </div>
        </ReduxProvider>
      );
    },
  ],
};

export default preview;