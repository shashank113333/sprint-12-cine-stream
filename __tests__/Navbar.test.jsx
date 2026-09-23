import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Navbar } from '../src/components/Navbar';

const createMockStore = (initialFavorites = []) =>
  configureStore({
    reducer: {
      favorites: (state = { items: initialFavorites }) => state,
      theme: (state = { currentTheme: 'dark' }, action) => {
        if (action.type === 'theme/setTheme') return { currentTheme: action.payload };
        return state;
      },
    },
  });

describe('Navbar Component Unit & Event Tests', () => {
  test('renders Navbar logo and brand name correctly', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(screen.getByText(/CINE/i)).toBeInTheDocument();
    expect(screen.getByText(/STREAM/i)).toBeInTheDocument();
  });

  test('renders navigation links for Discover and Favorites', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(screen.getByText(/Discover/i)).toBeInTheDocument();
    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
  });

  test('renders favorites badge count when favorites items exist', () => {
    const store = createMockStore([{ id: '1', title: 'Batman' }]);
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('handles theme selector interaction accurately', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    const themeSelect = screen.getByRole('combobox');
    expect(themeSelect).toBeInTheDocument();

    fireEvent.change(themeSelect, { target: { value: 'cyberpunk' } });
    expect(themeSelect.value).toBe('cyberpunk');
  });
});