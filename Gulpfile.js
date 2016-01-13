var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');

// Styles
gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

// JSX
gulp.task('jsx', function () {
  return gulp.src('./src/js/**/*.jsx')
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest('build/'));
});

// Module bundles
gulp.task('webpack', function() {
	gulp.src('./build/js/*.js')
	.pipe(webpack( {
			output: {
				filename: 'bundle.js'
			}
	}))
	.pipe(gulp.dest('build/'));
})
 
gulp.task('default', function () {
	gulp.watch('./css/sass/**/*.scss', ['sass']);
	gulp.watch('./js/**/*.jsx', ['jsx', 'webpack']);
});