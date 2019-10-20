const { parallel, series, src, dest, task, watch} = require('gulp');

const minifyCSS = require('gulp-minify-css');
const minifyJS = require('gulp-uglify');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourceMaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
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
        'assets/js/main.js'
    ],

    jsDest: 'dist/js',

    minJS: [
        'dist/js/*.js',
        '!dist/js/custom.min.js'
    ]

}

//compile scss into css
function style() {

    return src(config.sassFiles)
        .pipe(sourceMaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourceMaps.write('.'))
        .pipe(dest(config.cssDest))
        .pipe(browserSync.stream())

}

//compress css
function minifyCSSFunc() {

    return src(config.cssMin)
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifyCSS())
        .pipe(dest(config.cssDest))
        .pipe(browserSync.stream())
}

//compress js framework
function minifyJSFW() {

    return src(config.jsFW)
        .pipe(sourceMaps.init())
        .pipe(minifyJS())
        .pipe(concat('framework.min.js'))
        .pipe(sourceMaps.write('.'))
        .pipe(dest(config.jsDest))

}

function watchFiles() {

    browserSync.init({
        server:{
            baseDir: './'
        }
    });

    watch(['assets/scss/**/*.scss'], style);
    watch(['dist/css/style.css'], minifyCSSFunc)
    watch(['assets/js/*.js'], minifyJSFW);
    watch(['**/*.html', 'dist/*']).on("change", reload);
}

task('default', watchFiles);


exports.style = style;
exports.minifyCSSFunc = minifyCSSFunc;
exports.minifyJSFW = minifyJSFW;
exports.watchFiles = watchFiles;

exports.build = series(style, minifyCSSFunc , minifyJSFW);