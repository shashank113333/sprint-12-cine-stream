import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Navbar } from '../components/Navbar';
import favoritesReducer from '../store/slices/favoritesSlice';
import filterReducer from '../store/slices/filterSlice';
import themeReducer from '../store/slices/themeSlice';

const createNavbarMockStore = (favoritesCount = 0, currentTheme = 'dark') =>
  configureStore({
    reducer: {
      favorites: favoritesReducer,
      filters: filterReducer,
      theme: themeReducer,
    },
    preloadedState: {
      favorites: {
        items: Array.from({ length: favoritesCount }, (_, i) => ({ id: i + 1, title: `Movie ${i + 1}` })),
      },
      theme: {
        currentTheme,
      },
    },
  });

export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const DefaultNoFavorites = {
  decorators: [
    (Story) => (
      <Provider store={createNavbarMockStore(0, 'dark')}>
        <Story />
      </Provider>
    ),
  ],
};

export const WithFavoritesCount = {
  decorators: [
    (Story) => (
      <Provider store={createNavbarMockStore(5, 'dark')}>
        <Story />
      </Provider>
    ),
  ],
};

export const LightThemeSelected = {
  decorators: [
    (Story) => (
      <Provider store={createNavbarMockStore(3, 'light')}>
        <Story />
      </Provider>
    ),
  ],
};

export const CyberpunkThemeSelected = {
  decorators: [
    (Story) => (
      <Provider store={createNavbarMockStore(12, 'cyberpunk')}>
        <Story />
      </Provider>
    ),
  ],
};
