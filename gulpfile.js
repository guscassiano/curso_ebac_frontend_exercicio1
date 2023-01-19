const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')

function compileSass () {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'))
}

function codeJS () {
    return gulp.src('./source/scripts/*.js')
        .pipe(gulp.dest('./build/scripts'))
}

function image () {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(codeJS))
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(image))
}



