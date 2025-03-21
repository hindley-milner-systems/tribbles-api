export default function () {
  return {
    testFramework: 'ava',
    files: [
      'index.js',
      'src/**/*.js',
      'lib/**/*.js',
      'package.json', // important
      'force_exit.js',
      'data/*.js',
      'merkle-tree/*.js',
    ],
    tests: [
      'test/**/*.test.js',
      'test/load.test.js',
      '!data/**/*',
      '!merkle-tree',
      '!src/**/*.js',
    ],
    env: {
      type: 'node',
      params: {
        runner: '--experimental-vm-modules', // important
      },
    },
  };
}
