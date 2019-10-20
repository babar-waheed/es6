"use strict"

const { parallel, series, src, dest, task, watch} = require('gulp');

const minifyCSS = require('gulp-minify-css');
const minifyJS = require('gulp-uglify');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const concat = require('gulp-concat');
//const browserify = require('gulp-browserify');
const sourceMaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

var config = {

    sassFiles: 'assets/scss/*.scss',

    cssDest: 'dist/css/',

    cssMin: [
        'dist/css/*.css',
        '!dist/css/*.min.css'
    ],

    jsFW: [
        'assets/js/config.js',
        'assets/js/main.js',
        'assets/js/es6.js',
        'assets/js/es6/**/*.js'
    ],

    jsDest: 'dist/js',

    minJS: [
        'dist/js/*.js',
        '!dist/js/custom.min.js'
    ]

}

/**
 * compile sass to css
 */
var style = function() {

    return src(config.sassFiles)
        .pipe(sourceMaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourceMaps.write('.'))
        .pipe(dest(config.cssDest))
        .pipe(browserSync.stream())

}

/**
 * minify css
 */
var minifyCSSFunc = function() {

    return src(config.cssMin)
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifyCSS())
        .pipe(dest(config.cssDest))
        .pipe(browserSync.stream())
}

/**
 * compress & concat js
 */
var minifyJSFW = function() {

    return src(config.jsFW)
        .pipe(plumber())
        .pipe(babel({
              presets: [
                ['@babel/env', {
                  modules: false
                }]
              ]
            }))
        .pipe(sourceMaps.init())
        //.pipe(minifyJS())
        .pipe(concat('framework.min.js'))
        .pipe(sourceMaps.write('.'))
        .pipe(dest(config.jsDest))

}

/**
 * watch files html, css & js
 */
var watchFiles = function() {

    browserSync.init({
        server:{
            baseDir: './'
        }
    });

    watch(['assets/scss/**/*.scss'], style);
    watch(['dist/css/style.css'], minifyCSSFunc)
    watch(['assets/js/**/*.js'], minifyJSFW);
    watch(['**/*.html', 'dist/**/*.js', 'dist/**/*.css']).on("change", reload);
}

task('default', watchFiles);

exports.style = style;
exports.minifyCSSFunc = minifyCSSFunc;
exports.minifyJSFW = minifyJSFW;
exports.watchFiles = watchFiles;

exports.build = series(style, minifyCSSFunc , minifyJSFW);