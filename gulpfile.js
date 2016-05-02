const gulp = require('gulp'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      browserify = require('gulp-browserify'),
      react = require('gulp-react'),
      jslint = require('gulp-jslint'),
      jasmine = require('gulp-jasmine-phantom');

gulp.task('compile_js', function() {
    gulp.src('./libraries/*.jsx')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('libraries/'));

    gulp.src('./components/*.jsx')
        .pipe(react())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.js'))
        .pipe(browserify())
        .pipe(gulp.dest('public/javascripts/'));

    gulp.src('./components/*.jsx')
        .pipe(react())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./components/'));
});

gulp.task('test', function () {
  return gulp.src('spec/unit/*.js')
          .pipe(jasmine());
});

gulp.task('build', ['compile_js']);

gulp.task('watch', function() {
    gulp.watch('./components/*.jsx',['build']);
    gulp.watch('./libraries/*.jsx',['build']);
});