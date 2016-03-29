var gulp = require('gulp'),
  coffee = require('gulp-coffee'),
  sass = require('gulp-sass'),
  runSequence = require('run-sequence');

gulp.task('js', function () {
  gulp.src('app/src/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('public/js'));
});

gulp.task('css', function () {
  gulp.src('app/styles/**/*.sass')
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