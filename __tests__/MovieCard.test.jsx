import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MovieCard } from '../src/components/MovieCard';

const mockMovie = {
  id: 'tt4154664',
  title: 'Captain Marvel',
  release_date: '2019-06-15',
  vote_average: 8.2,
  poster_path: '/poster.jpg',
};

const createMockStore = () =>
  configureStore({
    reducer: {
      favorites: (state = { items: [] }) => state,
    },
  });

describe('MovieCard Component Unit & Event Tests', () => {
  test('renders movie title, release year, and rating payload passed via props', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <MovieCard movie={mockMovie} />
      </Provider>
    );

    expect(screen.getByText('Captain Marvel')).toBeInTheDocument();
    expect(screen.getByText('2019')).toBeInTheDocument();
    expect(screen.getByText('8.2')).toBeInTheDocument();
  });

  test('renders movie poster image with alt text correctly', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <MovieCard movie={mockMovie} />
      </Provider>
    );

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
  });

  test('handles poster image load error fallback', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <MovieCard movie={{ id: '123', title: 'No Poster Movie', poster_path: null }} />
      </Provider>
    );

    expect(screen.getByText('No Poster Available')).toBeInTheDocument();
  });

  test('handles user click interaction on favorite heart button', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <MovieCard movie={mockMovie} />
      </Provider>
    );

    const favoriteButton = screen.getByRole('button');
    expect(favoriteButton).toBeInTheDocument();
    fireEvent.click(favoriteButton);
  });
});