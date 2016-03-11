var heroin = require('heroin-js');

var base = { name: 'book-inventory-verheughe',
  region: 'eu',
  maintenance: false,
  stack: 'cedar-14',
  config_vars: { },
  addons: { mongolab: { plan: 'mongolab:sandbox' } },
  collaborators: [ 'sebastian.verheughe@finn.no', 'henning@spjelkavik.net' ],
  features:
   { 'runtime-dyno-metadata': { enabled: false },
     'log-runtime-metrics': { enabled: false },
     'http-session-affinity': { enabled: false },
     preboot: { enabled: false },
     'http-shard-header': { enabled: false },
     'http-end-to-end-continue': { enabled: false } },
  formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
  log_drains: [] }

module.exports = base;
