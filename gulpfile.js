var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    babel = require('babel-register');

gulp.task('test', function() {
    return gulp.src(['test/*.js'])
        .pipe(mocha({
            compilers:babel
        }));
});

gulp.task('tdd', function() {
    return gulp.watch('test/*.js', ['test']);
})


gulp.task('tdd-single', function() {
    return gulp.watch('test/*.js')
        .on('change', function(file) {
            gulp.src(file.path)
                .pipe(mocha({
                compilers: babel
            }))
        });
});
