var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('default', function () {
	gulp.watch('./css/sass/**/*.scss', ['sass']);
	return gulp.src('js/app.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'))
});