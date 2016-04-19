# ember-cli-testem-http-mocks

## Why?

http-mocks currently are not on express server that is instantiated as part of `ember test`.

There have been a number of attempts to land this and those can be tracked here:
https://github.com/ember-cli/ember-cli/issues/1763

Until this is fixed, this addon will serve as a monkey-patch allowing mocks to be available on the testem express server.

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
