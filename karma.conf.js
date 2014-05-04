module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['story'],
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true
  });
};
