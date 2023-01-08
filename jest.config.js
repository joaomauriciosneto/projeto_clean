module.exports = {
  // qualquer arquivo dentro de qualquer pasta (dentro de /src) do tipo typescript (*.ts)
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  testEnviroment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }

};
