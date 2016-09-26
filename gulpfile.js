'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('test', function () {
    return gulp.watch(['roles/**', 'tests/**'], ['test-run']);
});

gulp.task('test-run', function () {
    return gulp.src('tests/**/*Spec.js', { read: false })
               .pipe(mocha({ reporter: 'list' }));
});
