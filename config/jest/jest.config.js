module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/setup.js',
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: [
    '!src/main.js',
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}'
  ],
  // coverageThreshold: {
  //   global: {
  //     statements: 98,
  //     branches: 91,
  //     functions: 98,
  //     lines: 98
  //   }
  // },
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
      '<rootDir>/config/jest/mock/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/mock/image.js'
  },
};
