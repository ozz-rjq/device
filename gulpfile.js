var gulp = require("gulp"),
		less = require("gulp-less"),
		browserSync = require("browser-sync"),
		autoprefixer = require('gulp-autoprefixer');;

gulp.task("less", function(){
	gulp.src("less/style.less")
		.pipe(less())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest("css"))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task("browser-sync", function() {
	browserSync({
		server: {
			baseDir: "./"
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'less'], function() {
		gulp.watch('less/**/*.less', ['less']);
		gulp.watch('./*.html', browserSync.reload);
		gulp.watch('./js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);