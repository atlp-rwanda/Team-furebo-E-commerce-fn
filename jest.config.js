module.exports = {
  verbose: false,
  moduleFileExtensions: ['js', 'jsx'],
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js', '!src/stories/**', '!src/redux/actions/**'],
  coverageReporters: ['lcov', 'text', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/mocks/fileMock.js',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
