'use strict';

var gulp = require('gulp'),
    karma = require('karma');

gulp.task('test', function (done) {
    var karmaServer = new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, function (exitCode) {
        done();
        process.exit(exitCode);
    }).start();
});
