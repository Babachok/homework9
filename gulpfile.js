let gulp = require('gulp');
let scss = require('gulp-sass');
let browserSync = require('browser-sync');
let imgMin = require('gulp-imagemin');
let pngMin = require('imagemin-pngquant');


gulp.task('firstTask', function(){
	console.log("Hello");
})

gulp.task('scss' ,function(){
	gulp.src('app/scss/index.scss')
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(browserSync.reload({stream: true}));
	
	
});
gulp.task('watch', ['server'], function(){
	gulp.watch('app/scss/*.scss', ["scss"]);
});
gulp.task('server', function(){
	browserSync({
		server: {
			baseDir: "dist"
		}
	});
});

gulp.task('min-images', function(){
	gulp.src("app/img/*")
	.pipe(imgMin({
		progressive: true,
		use: [pngMin()],
		interlaced: true,			
	}))
	.pipe(gulp.dest("dist/img"));
});





