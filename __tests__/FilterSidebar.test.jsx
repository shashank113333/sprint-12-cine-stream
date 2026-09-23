import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { FilterSidebar } from '../src/components/FilterSidebar';
import filterReducer from '../src/store/slices/filterSlice';

const createMockStore = () =>
  configureStore({
    reducer: {
      filters: filterReducer,
    },
  });

describe('FilterSidebar Component Unit & Event Tests', () => {
  test('renders genre pills, release year select, rating slider, and reset button', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <FilterSidebar />
      </Provider>
    );

    expect(screen.getByText('Filter Movies')).toBeInTheDocument();
    expect(screen.getByText('All Genres')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByLabelText(/Filter movies by Release Year/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Filter movies by minimum IMDb rating/i)).toBeInTheDocument();
  });

  test('dispatches filter changes on user interaction', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <FilterSidebar />
      </Provider>
    );

    const actionPill = screen.getByText('Action');
    fireEvent.click(actionPill);
    expect(store.getState().filters.selectedGenre).toBe('28');

    const yearSelect = screen.getByLabelText(/Filter movies by Release Year/i);
    fireEvent.change(yearSelect, { target: { value: '2024' } });
    expect(store.getState().filters.selectedYear).toBe('2024');

    const resetButton = screen.getByRole('button', { name: /Reset all applied movie filters/i });
    fireEvent.click(resetButton);
    expect(store.getState().filters.selectedGenre).toBe('all');
  });
});