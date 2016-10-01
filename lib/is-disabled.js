'use strict';

module.exports = function() {
  var env = process.env['DISABLE_MOCKS'];

  return typeof env === 'string' && env.toLowerCase() === 'true';
};
