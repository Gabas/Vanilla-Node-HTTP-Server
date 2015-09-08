'use script';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');

gulp.task('jshint', function() {
	return gulp.src(['index.js', 'bin/greet.js', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
	return gulp.src('test/**/*test.js')
		.pipe(gulpMocha());
});

gulp.task('default', ['jshint', 'test']);