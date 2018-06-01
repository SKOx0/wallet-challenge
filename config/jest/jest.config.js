module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/setup.js',
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: [
    '!app/app.js',
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}'
  ],
};
