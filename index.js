/* jshint node: true */
'use strict';

var path = require('path');
var existsSync = require('exists-sync');

module.exports = {
  name: 'ember-cli-testem-http-mocks',

  isDisabled: function() {
    var disabled = process.env['DISABLE_MOCKS'];

    return typeof disabled === 'string' && disabled.toLowerCase() === 'true';
  },

  testemMiddleware: function(app) {
    if (this.isDisabled()) {
      return;
    }

    var root = this.project.root;
    var modulePath = path.join(root, 'register-http-mocks.js');

    // to maintain backwards compatability since the file was moved
    if (existsSync(modulePath)) {
      require(modulePath)(app);
    } else {
      var server = require(path.join(root, 'server'));

      if (typeof server.setupMocks === 'function') {
        server.setupMocks(app);
      }
    }
  }
};
