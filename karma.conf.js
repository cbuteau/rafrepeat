// Karma configuration
// Generated on Fri May 22 2020 13:52:35 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['mocha', 'requirejs', 'chai'],
    //frameworks: ['jasmine', 'requirejs'],

    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: './rafrepeat.js', included: true},
      {pattern: './tests/**/*.js', included: true},
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    plugins: [
        "karma-phantomjs-launcher",
        "karma-chrome-launcher",
        "karma-firefox-launcher",
        "karma-junit-reporter",
        "karma-jasmine",
        "karma-requirejs",
        "karma-coverage"
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './rafrepeat.min.js': 'coverage'
    },

    coverageReporter: {
        type : 'text-summary',
        dir : 'coverage/',
        includeAllSources : true
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
