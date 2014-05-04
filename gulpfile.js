var gulp = require('gulp');
var karma = require('gulp-karma');
var stream = require('streamqueue')

var paths = {
  scripts: [
    'bower_components/underscore/underscore.js',
    'script/bullets.js',
  ],
  specs: [
    'spec/*.js'
  ]
}
gulp.task('spec', function() {
  return stream(
      { objectMode: true },
      gulp.src(paths.scripts),
      gulp.src(paths.specs)
    ).pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
});

gulp.task('default', function() {});

