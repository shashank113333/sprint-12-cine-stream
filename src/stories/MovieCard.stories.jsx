import { MovieCard } from '../components/MovieCard';

export default {
  title: 'Components/MovieCard',
  component: MovieCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    movie: {
      control: 'object',
      description: 'Movie payload data containing id, title, poster_path, vote_average, and release_date',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '260px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    movie: {
      id: 550,
      title: 'Fight Club',
      poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      vote_average: 8.4,
      release_date: '1999-10-15',
    },
  },
};

export const HighRated = {
  args: {
    movie: {
      id: 278,
      title: 'The Shawshank Redemption',
      poster_path: '/9cqN121GvOiW2Vj0efk3jG6T4g9.jpg',
      vote_average: 9.3,
      release_date: '1994-09-23',
    },
  },
};

export const LongTitle = {
  args: {
    movie: {
      id: 12345,
      title: 'Spider-Man: Across the Spider-Verse - Special Extended Collectors Edition 2024',
      poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      vote_average: 8.7,
      release_date: '2023-06-02',
    },
  },
};

export const NoPosterFallback = {
  args: {
    movie: {
      id: 99999,
      title: 'Unreleased Indie Film',
      poster_path: null,
      vote_average: 7.2,
      release_date: '2025-11-20',
    },
  },
};

export const ActionMovie = {
  args: {
    movie: {
      id: 155,
      title: 'The Dark Knight',
      poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      vote_average: 9.0,
      release_date: '2008-07-18',
    },
  },
};
