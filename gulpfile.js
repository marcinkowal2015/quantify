'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    browserify = require("browserify"),
    source = require('vinyl-source-stream'),
    tsify = require("tsify"),
    clean = require("gulp-clean"),
    deployTarget = '../quantify-deploy';

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
    entries: ['ts/main.ts' ,'ts/home.ts' , 'ts/type06.ts' , 'ts/type07.ts' , 'ts/filter.ts'],
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

gulp.task('clean', function() {
  gulp.src(deployTarget, {read: false})
      .pipe(clean({force: true}));
});

gulp.task('deploy', ['clean', 'sass', 'bundle-ts'], function () {
  gulp.src(['./style.css', './*.php']).pipe(gulp.dest(deployTarget));
  gulp.src('./js/*.*').pipe(gulp.dest(deployTarget + '/js'));
  gulp.src('./img/*.*').pipe(gulp.dest(deployTarget + '/img'));
  gulp.src('./fonts/*.*').pipe(gulp.dest(deployTarget + '/fonts'));
  gulp.src('./ajax/*.*').pipe(gulp.dest(deployTarget + '/ajax'));
  gulp.src('./type/*.*').pipe(gulp.dest(deployTarget + '/type'));
  gulp.src('./languages/*.*').pipe(gulp.dest(deployTarget + '/languages'));
});