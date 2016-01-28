var gulp = require('gulp');

gulp.task('default', ['setup-public-css', 'setup-public-js']);

gulp.task('setup-public-css', function() {
  return gulp.src('./bower_components/materialize/dist/css/materialize.css')
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('setup-public-js', function() {
  return gulp.src('./bower_components/materialize/dist/js/materialize.js')
    .pipe(gulp.dest('./public/javascripts'));
});
