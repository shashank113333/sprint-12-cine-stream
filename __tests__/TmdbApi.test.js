import { getPosterUrl, fetchPopularMovies, searchMovies, fetchMovieDetails } from '../src/api/tmdb';

describe('TMDB API Utility Unit Tests', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('getPosterUrl formats image path correctly', () => {
    expect(getPosterUrl(null)).toBeNull();
    expect(getPosterUrl('N/A')).toBeNull();
    expect(getPosterUrl('https://example.com/poster.jpg')).toBe('https://example.com/poster.jpg');
    expect(getPosterUrl('/poster.jpg')).toContain('https://image.tmdb.org/t/p/w500/poster.jpg');
  });

  test('fetchPopularMovies returns formatted movies payload', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        Search: [{ imdbID: 'tt123', Title: 'Movie 1', Year: '2023', Poster: 'poster.jpg' }],
      }),
    });

    const res = await fetchPopularMovies(1);
    expect(res.results).toHaveLength(1);
    expect(res.results[0].title).toBe('Movie 1');
  });

  test('searchMovies handles empty query and API data', async () => {
    const emptyRes = await searchMovies('');
    expect(emptyRes.results).toEqual([]);

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        Search: [{ imdbID: 'tt456', Title: 'Batman Movie', Year: '2022', Poster: 'poster.jpg' }],
        totalResults: '20',
      }),
    });

    const res = await searchMovies('Batman');
    expect(res.results).toHaveLength(1);
    expect(res.total_pages).toBe(2);
  });

  test('fetchMovieDetails fetches single movie details payload', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        Response: 'True',
        imdbID: 'tt123',
        Title: 'Detail Movie',
        Year: '2024',
        imdbRating: '8.5',
      }),
    });

    const details = await fetchMovieDetails('tt123');
    expect(details.title).toBe('Detail Movie');
    expect(details.imdbRating).toBe('8.5');
  });
});