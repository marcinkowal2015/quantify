'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    browserify = require("browserify"),
    source = require('vinyl-source-stream'),
    tsify = require("tsify");

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task("bundle-ts", function () {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['ts/main.ts' ,'ts/home.ts' , 'ts/type06.ts'],
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest("js"));
});

gulp.task('watch-ts' ,function () {
  gulp.watch('./ts/**/*.ts' , ['bundle-ts']);
});