var gulp = require('gulp');
var karma = require('gulp-karma');
var stream = require('streamqueue')
var bowerFiles = require('gulp-bower-files')
var gulpIgnore = require('gulp-ignore')

var paths = {
  scripts: [
    'lib/movements.js',
    'lib/sprite.js',
    'lib/bullet.js',
    'lib/enemies.js',
    'lib/cannon.js',
    'lib/starfield.js',
    'lib/player.js'
  ],
  specs: [
    'spec/*.js'
  ]
}

gulp.task('scripts', function() {
  return stream(
      { objectMode: true },
      bowerFiles(),
      gulp.src(paths.scripts),
      ['lib/main.js']
    ).pipe(concat('app.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('spec', function() {
  return stream(
      { objectMode: true },
      bowerFiles(),
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

