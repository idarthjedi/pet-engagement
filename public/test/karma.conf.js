// Karma configuration
// Generated on 2016-03-12

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'lib/jquery/dist/jquery.js',
      'lib/angular/angular.js',
      'lib/bootstrap/dist/js/bootstrap.js',
      'lib/angular-animate/angular-animate.js',
      'lib/angular-cookies/angular-cookies.js',
      'lib/angular-resource/angular-resource.js',
      'lib/angular-route/angular-route.js',
      'lib/angular-sanitize/angular-sanitize.js',
      'lib/angular-touch/angular-touch.js',
      'lib/datatables/media/js/jquery.dataTables.js',
      'lib/flot/jquery.flot.js',
      'lib/holderjs/holder.js',
      'lib/metisMenu/dist/metisMenu.js',
      'lib/raphael/raphael.js',
      'lib/mocha/mocha.js',
      'lib/morrisjs/morris.js',
      'lib/datatables-responsive/js/dataTables.responsive.js',
      'lib/flot.tooltip/js/jquery.flot.tooltip.js',
      'lib/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js',
      'lib/tv4/tv4.js',
      'lib/objectpath/lib/ObjectPath.js',
      'lib/angular-schema-form/dist/schema-form.js',
      'lib/angular-schema-form/dist/bootstrap-decorator.js',
      'lib/angular-mocks/angular-mocks.js',
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
