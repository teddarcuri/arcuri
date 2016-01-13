var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
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
		.pipe(concat('bundle.js'))
		.pipe(webpack({
			output: {
       		filename: 'bundlePack.js',
      		},
    	}))
		.pipe(gulp.dest('./build/js'));
});
 
gulp.task('default', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/**/*.jsx', ['build']);
});