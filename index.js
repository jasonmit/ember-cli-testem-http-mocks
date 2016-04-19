/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-testem-http-mocks',

  testemMiddleware: function(app) {
    require(path.join(this.project.root, 'register-http-mocks'))(app);
  }
};
