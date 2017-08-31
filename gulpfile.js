var gulp = require('gulp'),
	sequence = require('gulp-sequence'),
    watch = require('gulp-watch'),
    gulpgo = require("gulp-go"),
	plumber = require('gulp-plumber'),
	clean = require('gulp-clean'),
	webpack = require('webpack-stream'),
	cleandest = require('gulp-dest-clean'),
    livereload = require('gulp-livereload');
    exec = require('gulp-exec');

gulp.task('watch', function () {
    livereload.listen();

    //gulp.watch('./public/**/*.js', ['scripts']);
    //gulp.watch('./public/**/*.css', ['styles']);
    //gulp.watch('./public/img/*', ['images']);
    //gulp.watch('views/**/*.html', ['html']);
    gulp.watch(['app/**/*.vue', 'app/**/*.js'], ['webpack']);
});

gulp.task('html', function() {
    return gulp.src('views/**/*.html')
        .pipe(watch('views/**/*.html'))
        .pipe(plumber())
        .pipe(livereload());
});

gulp.task('webpack', function() {
	return gulp.src('app/main.js')
		.pipe(cleandest('public/dist'))
	    .pipe(webpack(require('./webpack.config.js')))
	    .pipe(gulp.dest('public'))
	    .pipe(livereload());
});

gulp.task("go-run", function() {
  	var go = gulpgo.run("main.go", ["--arg1", "value1"], {cwd: __dirname, stdio: 'inherit'});

  	gulp.watch([
            __dirname+"/**/*.go"
            //, __dirname+"/**/*.js"
        ])
        .on("change", function(event) {
            console.log('File: ' + event.path + ' was ' + event.type + ', server restart...');
        	go.restart();
      	});
});

gulp.task("default", sequence("webpack", ["go-run", "watch"]));



gulp.task('go-build', function (cb) {
    return gulp.src('main', {read: false})
        .pipe(clean({force: true}))
        .pipe(exec('CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build main.go'));
});

gulp.task("build", sequence("webpack", "go-build"));
