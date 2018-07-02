var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var pump = require('pump')


gulp.task('default', function () {
  return gulp.src('src/css/*.css')
    .pipe(concatCss("css/Bundle.css"))
    .pipe(gulp.dest('dist/'));
});


gulp.task('script', function (cb) {
    pump([
        gulp.src("src/*.js"),
        uglify(),
        gulp.dest('dist')
    ], cb);
})

//gulp.task('default',['script']);