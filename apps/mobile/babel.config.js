/**
 * Babel configuration
 * https://babeljs.io/docs/configuration
 *
 * @type {import('@babel/core').TransformOptions}
 */
const config = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'packagejson',
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};

module.exports = config;
