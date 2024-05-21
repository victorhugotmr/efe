const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function comprimirJS() {
  return gulp.src('./src/js/main.js')
          .pipe(uglify())
          .pipe(obfuscate())
          .pipe(gulp.dest('./build/js'))
}

function compilaSass() {
  return gulp.src('./src/style/main.scss')
          .pipe(sourcemaps.init())
          .pipe(sass({
            outputStyle: 'compressed'
          }))
          .pipe(sourcemaps.write('./maps'))
          .pipe(gulp.dest('./build/style'))
}

function comprimirImg() {
  return gulp.src('src/images/*')
          .pipe(imagemin())
          .pipe(gulp.dest('./build/images'))
}

exports.sass = compilaSass;
exports.watch = function() {
  gulp.watch('./src/style/*.scss', {ignoreInitial: false } ,gulp.series(compilaSass))
};
exports.javascript = comprimirJS;
exports.images = comprimirImg;