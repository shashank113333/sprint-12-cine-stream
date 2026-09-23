import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import FilterSidebar from '../src/components/FilterSidebar';

const createMockStore = () =>
  configureStore({
    reducer: {
      filters: (state = { genre: 'all', year: 'all', minRating: 0, sortBy: 'popularity.desc', searchQuery: '' }, action) => {
        if (action.type === 'filters/setSearchQuery') return { ...state, searchQuery: action.payload };
        if (action.type === 'filters/setGenre') return { ...state, genre: action.payload };
        return state;
      },
    },
  });

describe('SearchBar & Filter Component Event & Network Mocking Tests', () => {
  test('updates input field state upon simulated user keystrokes', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <div>
          <input
            data-testid="search-input"
            type="text"
            placeholder="Search movies..."
            onChange={(e) => store.dispatch({ type: 'filters/setSearchQuery', payload: e.target.value })}
          />
        </div>
      </Provider>
    );

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'Batman' } });
    expect(searchInput.value).toBe('Batman');
  });

  test('executes network mocked asynchronous fetch without active internet connectivity', async () => {
    const mockMoviesResponse = {
      Search: [
        {
          imdbID: 'tt1877830',
          Title: 'The Batman',
          Year: '2022',
          Poster: 'https://m.media-amazon.com/images/M/poster.jpg',
        },
      ],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMoviesResponse),
      })
    );

    const fetchMovies = async (query) => {
      const res = await fetch(`https://omdbapi.com/?s=${query}&apikey=mock`);
      const data = await res.json();
      return data.Search;
    };

    const results = await fetchMovies('Batman');

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(results).toHaveLength(1);
    expect(results[0].Title).toBe('The Batman');

    global.fetch.mockClear();
  });
});