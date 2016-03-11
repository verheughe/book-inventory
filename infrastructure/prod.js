var heroin = require('heroin-js');
var _ = require('lodash');

var prod = {
  name: 'book-inventory-verheughe',
  config_vars: { NODE_ENV: 'production' }
};

var config = _.merge({}, require('./base'), prod);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);
