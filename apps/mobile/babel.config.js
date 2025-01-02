const rootConfig = require('../../babel.config');

/**
 * Babel configuration
 * https://babeljs.io/docs/configuration
 *
 * @type {import('@babel/core').TransformOptions}
 */
const config = {
  ...rootConfig,
};

module.exports = config;
