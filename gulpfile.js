var batch = require('gulp-batch');
var browsersync = require('browser-sync');
var gulp = require('gulp');
var less = require('gulp-less');
var lessplugin_autoprefix = require('less-plugin-autoprefix');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var yargs = require('yargs');

var argv = yargs.argv;
var autoprefix = new lessplugin_autoprefix({ browsers: ['last 1 version', '> 0.5%'] });
var browsersync_instance = browsersync.create();

gulp.task('less', function(done) {
	return gulp.src('./less/*.less')
		.pipe(plumber({
			errorHandler: function (err) {
				done(err);
			}
		}))
		.pipe(sourcemaps.init())
		.pipe(less({
			plugins: [autoprefix]
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/css'));
});

gulp.task('browser-sync', function() {
	browsersync_instance.init({
		server: './',
		ui: false,
		open: argv.open,
		files: './public/**/*',
		startPath: '/public'
	});
});

gulp.task('watch', function() {
	watch('./less/**/*.less', batch(function (events, done) {
		gulp.start('less', done);
	}));
});

gulp.task('dev', ['less', 'browser-sync', 'watch']);

gulp.task('default', ['dev']);