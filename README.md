# ember-cli-testem-http-mocks

[http-mocks](http://ember-cli.com/user-guide/#mocks-and-fixtures) currently are not hooked up on the express server that is instantiated as part of `ember test`.

There have been a number of attempts to land this and those can be tracked here:
[ember-cli/issues/#1763](https://github.com/ember-cli/ember-cli/issues/1763)

Until the core issue is fixed, this addon works around the feature/bug by allowing mocks to be registered against the testem server.

## Installation

* `ember install ember-cli-testem-http-mocks`
* `ember g http-mock /api` (create a mock if one is not already created)

## Disable

`DISABLE_MOCKS=true ember test`

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
