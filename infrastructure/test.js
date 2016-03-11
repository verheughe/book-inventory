var heroin = require('heroin-js');
var _ = require('lodash');

var test = {
  name: 'book-inventory-verheughe-test',
  config_vars: { NODE_ENV: 'test' }
};

  var config = _.merge({}, require('./base'), test);

  var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
  configurator(config);
