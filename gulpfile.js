var gulp = require('gulp'),
  coffee = require('gulp-coffee'),
  sass = require('gulp-sass'),
  sassLint = require('gulp-sass-lint'),
  runSequence = require('run-sequence'),
  jasmine = require('gulp-jasmine'),
  browserify = require('gulp-browserify'),
  rename = require('gulp-rename'),
  coffeeify = require('coffeeify');

gulp.task('js', function () {
  gulp.src('app/src/index.coffee', {read: false})
    .pipe( browserify({transform: ['coffeeify'], extensions: ['.coffee']}) )
    .pipe( rename({extname: '.js'}) )
    .pipe( gulp.dest('public/js') );
});

gulp.task('css', function () {
  gulp.src('app/styles/**/*.sass')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
  gulp.watch('app/styles/**/*.sass', ['css']);
  gulp.watch('app/src/**/*.coffee', ['js']);
});

gulp.task('default', function(callback) {
  runSequence(['css', 'js'], 'watch', callback)
});


require('coffee-script/register');
gulp.task('test', function() {
  gulp.src('test/**/*.coffee')
    .pipe(jasmine());
});