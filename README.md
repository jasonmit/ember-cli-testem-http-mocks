# ember-cli-testem-http-mocks

(http-mocks)[http://ember-cli.com/user-guide/#mocks-and-fixtures] currently are not hooked up on the express server that is instantiated as part of `ember test`.

There have been a number of attempts to land this and those can be tracked here:
https://github.com/ember-cli/ember-cli/issues/1763

Until the core issue is fixed, this addon works around the issue -- allowing mocks to be registered against the testem server.

## Disable

`DISABLE_MOCKS=true ember test`

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
