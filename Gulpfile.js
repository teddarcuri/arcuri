var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');

gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('build', function () {
  return gulp.src('./src/js/**/*.jsx')
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest('./build/js'))
		.pipe(webpack({
			entry: './build/js/app.js',
			output: {
       		filename: 'bundle.js'
      		}
    	}))
		.pipe(gulp.dest('./build/js'));
});

gulp.task('webpack', function () {
  return gulp.src('./build/js/bundle.js')
		
		.pipe(gulp.dest('./build/js'));
});
 


gulp.task('default', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/**/*.jsx', ['build', 'webpack']);
});