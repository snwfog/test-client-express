var gulp = require('gulp');

gulp.task('default', ['setup-public-css', 'setup-public-js']);

gulp.task('setup-public-css', function() {
  return gulp.src('./bower_components/material-design-lite/material.css')
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('setup-public-js', function() {
  return gulp.src('./bower_components/material-design-lite/material.js')
    .pipe(gulp.dest('./public/javascripts'));
});
