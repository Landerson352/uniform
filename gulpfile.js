var browsersync = require('browser-sync');
//var cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var less = require('gulp-less');
var lessplugin_autoprefix = require('less-plugin-autoprefix');
var plumber = require('gulp-plumber');
var replace = require('gulp-replace');
//var sourcemaps = require('gulp-sourcemaps');
var watchLess = require('gulp-watch-less2');
var yargs = require('yargs');

var argv = yargs.argv;
var autoprefix = new lessplugin_autoprefix({ browsers: ['last 1 version', '> 0.5%'] });
var browsersync_instance = browsersync.create();

gulp.task('less', function(done) {
	return gulp.src('./demos/less/*.less')
		.pipe(plumber({
			errorHandler: function (err) {
				done(err);
			}
		}))
		.pipe(less({
			plugins: [autoprefix]
		}))
		//.pipe(cleanCSS())
		.pipe(gulp.dest('./demos/css'));
});

gulp.task('browser-sync', function() {
	browsersync_instance.init({
		server: './',
		ui: false,
		open: argv.open,
		files: ['./*.html', './demos/*.html', './demos/css/**/*'],
		startPath: '/'
	});
});

gulp.task('less-watch', function(done) {
	return gulp.src('./demos/less/*.less')
		.pipe(plumber({
			errorHandler: function (err) {
				done(err);
			}
		}))
		.pipe(watchLess('./demos/less/*.less'))
		//.pipe(sourcemaps.init())
		.pipe(less({
			plugins: [autoprefix]
		}))
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest('./demos/css'));
});

gulp.task('import-bootstrap', function() {
	gulp.src('./node_modules/bootstrap/fonts/**/*.*')
		.pipe(gulp.dest('./demos/fonts'));
	gulp.src('./node_modules/bootstrap/less/**/*.less')
		.pipe(replace(/(\-?[0-9]+)px(?! \\9)/g, 'c($1)'))
		.pipe(replace(/floor|ceil/g, ''))
		.pipe(gulp.dest('./less/bootstrap'));
});

gulp.task('build', ['less']);

gulp.task('dev', ['browser-sync', 'less-watch']);

gulp.task('default', ['dev']);

// var config = {
// 	srcFile: 'demos/less/demo-test.less',
// 	destDir: 'demos/css'
// };

// gulp.task('test', function () {
// 	return gulp.src(config.srcFile)
// 		.pipe(watchLess(config.srcFile))
// 		.pipe(less())
// 		.pipe(gulp.dest(config.destDir));
// });