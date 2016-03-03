var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var serve = require('gulp-serve');
var watch = require('gulp-watch');
 
gulp.task('less', function () {
	return gulp.src('./less/*.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(autoprefixer("last 1 version", "> 0.5%"))
		.pipe(gulp.dest('./public/css'));
});
 
gulp.task('watch', function () {
	gulp.watch('./less/**/*.less', ['less']);
 
	//refresh only files that change
	return gulp.src('./public/css/**/*.css')
		.pipe(watch('./public/css/**/*.css'))
		.pipe(livereload({ start: true }));
});

gulp.task('serve', serve('./public'));

gulp.task('default', ['less', 'watch', 'serve']);