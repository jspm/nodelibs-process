var productionEnv = require('@system-env').production;
process.env.NODE_ENV = productionEnv ? 'production' : 'development';
module.exports = global.process;