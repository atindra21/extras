var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('default',['uglify','lint']);

gulp.task('uglify',function(){
    return gulp.src('lintTest.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist-gulp'));
});
gulp.task('lint', function() {
    gulp.src('lintTest.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});