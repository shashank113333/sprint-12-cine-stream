const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'src/components/Navbar.jsx',
    'src/components/MovieCard.jsx',
    'src/components/FilterSidebar.jsx',
    'src/store/slices/*.js',
    'src/api/tmdb.js',
  ],
};

module.exports = createJestConfig(customJestConfig);