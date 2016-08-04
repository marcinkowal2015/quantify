'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});