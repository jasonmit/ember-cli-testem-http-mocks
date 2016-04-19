'use strict';

module.exports = function() {
  var env = process.env['DISABLE_MOCKS'];

  if (env && env.toLowerCase() === 'true') {
    return true;
  }

  return false
};
