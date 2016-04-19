/* jshint node: true */
'use strict';

var path = require('path');
var isDisabled = require('./lib/is-disabled')

module.exports = {
  name: 'ember-cli-testem-http-mocks',

  testemMiddleware: function(app) {
    if (isDisabled()) { return; }

    try {
      require(path.join(this.project.root, 'register-http-mocks'))(app);
    } catch(ex) {
      this.ui.writeLine(ex, 'ERROR');
    }
  }
};
