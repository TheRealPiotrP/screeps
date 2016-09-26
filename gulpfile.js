'use strict';

var gulp = require('gulp'),
    istanbul = require('gulp-istanbul'),
    mocha = require('gulp-mocha');

gulp.task('pre-test', function () {
  return gulp.src(['roles/**/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
    return gulp.watch(['roles/**', 'tests/**'], ['test-run']);
});

gulp.task('test-run', function () {
    return gulp.src('tests/**/*Spec.js', { read: false })
               .pipe(mocha({ reporter: 'list' }))
               .pipe(istanbul.writeReports({ dir: './.coverage' }));
});
