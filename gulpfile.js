var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	uglifyCss = require('gulp-uglifycss'),
	rename = require('gulp-rename');

gulp.task('default', function() {
	gulp.src('src/CodeWind.js')
		.pipe(gulp.dest('build'))
		.pipe(uglify())
		.pipe(rename('./CodeWind.min.js'))
		.pipe(gulp.dest('build'));

	gulp.src('src/Languages/*.js')
		.pipe(gulp.dest('build/Languages'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('build/Languages'));

	gulp.src('src/Themes/*.css')
		.pipe(gulp.dest('build/Themes'))
		.pipe(uglifyCss())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('build/Themes'));

	gulp.src('src/Themes/*.sass')
		.pipe(gulp.dest('build/Themes'));
});