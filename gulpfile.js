'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
  sass: 'devSASS/*.scss',
  scripts : 'devJS/*.js'
};

gulp.task('sass', function() {
    return gulp.src('devSASS/styles.scss')
        .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./site/build/css'))
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(concat('scripts.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('site/build/js'))
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);