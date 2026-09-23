import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { FilterSidebar } from '../components/FilterSidebar';
import filterReducer from '../store/slices/filterSlice';
import favoritesReducer from '../store/slices/favoritesSlice';
import themeReducer from '../store/slices/themeSlice';

const createMockStore = (initialFilterState) =>
  configureStore({
    reducer: {
      filters: filterReducer,
      favorites: favoritesReducer,
      theme: themeReducer,
    },
    preloadedState: {
      filters: {
        selectedGenre: 'all',
        selectedYear: 'all',
        minRating: 0,
        sortBy: 'popularity.desc',
        searchQuery: '',
        ...initialFilterState,
      },
    },
  });

export default {
  title: 'Components/FilterSidebar',
  component: FilterSidebar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const DefaultFilters = {
  decorators: [
    (Story) => (
      <Provider store={createMockStore({})}>
        <Story />
      </Provider>
    ),
  ],
};

export const ActionGenreActive = {
  decorators: [
    (Story) => (
      <Provider
        store={createMockStore({
          selectedGenre: '28', // Action
        })}
      >
        <Story />
      </Provider>
    ),
  ],
};

export const HighRatingFiltered = {
  decorators: [
    (Story) => (
      <Provider
        store={createMockStore({
          minRating: 8.5,
          sortBy: 'vote_average.desc',
        })}
      >
        <Story />
      </Provider>
    ),
  ],
};

export const YearFiltered = {
  decorators: [
    (Story) => (
      <Provider
        store={createMockStore({
          selectedGenre: '878', // Sci-Fi
          selectedYear: '2023',
          minRating: 7.0,
        })}
      >
        <Story />
      </Provider>
    ),
  ],
};
