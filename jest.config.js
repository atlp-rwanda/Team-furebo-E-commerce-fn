module.exports = {
   verbose: false,
    moduleFileExtensions: ['js', 'jsx'],
    transform: {'^.+\\.jsx?$': 'babel-jest' },
    transformIgnorePatterns: ['/node_modules/'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/build/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js', '!src/stories/**'],
    coverageReporters: ['lcov','text','text-summary'],
    coverageThreshold: {
      global: {
        branches: 85,
        functions: 85,
        lines: 85,
        statements: 85,
      },
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
  };
  