'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  sass: 'devSASS/*.scss',
  scripts : 'devJS/*.js'
};

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./01_Hello_World/build/css'))
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(concat('scripts.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('01_Hello_World/build/js'))
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch', 'sass', 'scripts']);