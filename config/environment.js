/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'malajsie',
    environment: environment,
    contentSecurityPolicy: {
      'default-src': "'self' *.googlesyndication.com",
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com maps.gstatic.com",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' *.googleapis.com maps.gstatic.com *.googlesyndication.com",
      'frame-src': "'self' *.doubleclick.net *.googlesyndication.com",
      'font-src': "'self' fonts.gstatic.com",
      'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com maps.google.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
    },
    firebase: 'https://malajsie.firebaseio.com/',
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: 'UA-43732567-11'
    };
  }

  return ENV;
};
