import favoritesReducer, { toggleFavorite, hydrateFavorites } from '../src/store/slices/favoritesSlice';
import filterReducer, { setGenre, setYear, setMinRating, setSortBy, setSearchQuery, resetFilters } from '../src/store/slices/filterSlice';
import themeReducer, { setTheme, hydrateTheme } from '../src/store/slices/themeSlice';

describe('Redux Slices 100% Coverage Unit Tests', () => {
  test('favoritesSlice toggleFavorite adds and removes item', () => {
    const initialState = { items: [], isHydrated: false };
    const movie = { id: '1', title: 'Avengers' };

    const stateWithFav = favoritesReducer(initialState, toggleFavorite(movie));
    expect(stateWithFav.items).toHaveLength(1);

    const stateWithoutFav = favoritesReducer(stateWithFav, toggleFavorite(movie));
    expect(stateWithoutFav.items).toHaveLength(0);

    const hydratedState = favoritesReducer(initialState, hydrateFavorites());
    expect(hydratedState.isHydrated).toBe(true);
  });

  test('filterSlice handles filter mutations and reset', () => {
    const initialState = {
      selectedGenre: 'all',
      selectedYear: 'all',
      minRating: 0,
      sortBy: 'popularity.desc',
      searchQuery: '',
    };

    let state = filterReducer(initialState, setGenre('Action'));
    expect(state.selectedGenre).toBe('Action');

    state = filterReducer(state, setYear('2024'));
    expect(state.selectedYear).toBe('2024');

    state = filterReducer(state, setMinRating(7));
    expect(state.minRating).toBe(7);

    state = filterReducer(state, setSortBy('vote_average.desc'));
    expect(state.sortBy).toBe('vote_average.desc');

    state = filterReducer(state, setSearchQuery('Batman'));
    expect(state.searchQuery).toBe('Batman');

    state = filterReducer(state, resetFilters());
    expect(state.selectedGenre).toBe('all');
    expect(state.searchQuery).toBe('');
  });

  test('themeSlice handles theme switching and hydration', () => {
    const initialState = { currentTheme: 'dark' };
    let nextState = themeReducer(initialState, setTheme('light'));
    expect(nextState.currentTheme).toBe('light');

    nextState = themeReducer(nextState, hydrateTheme());
    expect(nextState.currentTheme).toBeDefined();
  });
});