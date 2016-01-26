var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

// Static server
gulp.task('serve', ['sass', 'build', 'webpack'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/**/*.jsx', ['build', 'webpack']);
	gulp.watch("./index.html").on('change', browserSync.reload);
});

gulp.task('build', function () {
  return gulp.src(['./src/js/**/*.jsx', './src/js/**/*.js'])
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest('./build/js'))
		.pipe(webpack({
			entry: './build/js/App.js',
			output: {
       		filename: 'bundle.js'
      		}
    	}))
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
});

gulp.task('webpack', function () {
  return gulp.src('./build/js/bundle.js')
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
});
 

gulp.task('default', ['serve']);