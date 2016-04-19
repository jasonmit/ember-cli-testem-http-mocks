/*jshint node:true*/

// To use it create some files under `server/mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
  var globSync = require('glob').sync;
  var mocks = globSync('./server/mocks/**/*.js', { cwd: __dirname }).map(require);

  mocks.forEach(function(route) { route(app); });
};
