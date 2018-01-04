var gulp = require("gulp");
var less = require("gulp-less");
var watch = require("gulp-watch");

gulp.task("less", function(){
	gulp.src("less/style.less")
		.pipe(less())
		.pipe(gulp.dest("css"));
});

gulp.task('watch', function() {
    gulp.watch(['less/*.less', 'less/blocks/*.less', 'less/global/*.less'], ['less']);
});

gulp.task('default', ['watch']);