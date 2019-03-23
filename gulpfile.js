const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const del = require('del');
const runSequence = require('run-sequence');
const replace = require('gulp-replace');
const injectPartials = require('gulp-inject-partials');
const inject = require('gulp-inject');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const merge = require('merge-stream');

gulp.paths = {
    dist: 'dist',
};

const paths = gulp.paths;


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        port: 3000,
        server: './',
        ghostMode: false,
        notify: false,
    });

    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('pages/*.html').on('change', browserSync.reload);
    gulp.watch('js/**/*.js').on('change', browserSync.reload);
});


