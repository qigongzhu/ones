//接值
var gulp=require('gulp');
var gulputil=require('gulp-util');
//接js的值
var gulpuglify=require('gulp-uglify');
//接css的值
var gulpcss=require('gulp-minify-css');
//接html的值
var gulphtml=require('gulp-minify-html');


//复制img
gulp.task('myimg',function(){
	gulp.src('img/*.jpg').pipe(gulp.dest('two/img'))
})
//压缩html
gulp.task('myhtml',function(){
	gulp.src('*.html').pipe(gulphtml()).pipe(gulp.dest('two'))
})
//压缩js
gulp.task('myjs',function(){
	gulp.src('js/*.js').pipe(gulpuglify()).pipe(gulp.dest('two/js'))
})
//压缩lib下的js
gulp.task('libjs',function(){
	gulp.src('lib/bootstrap/js/*.js').pipe(gulpuglify()).pipe(gulp.dest('two/lib/bootstrap/js'))
})
//压缩css
gulp.task('mycss',function(){
	gulp.src('css/*.css').pipe(gulpcss()).pipe(gulp.dest('two/css'))
})
//压缩lib下的css
gulp.task('libcss',function(){
	gulp.src('lib/bootstrap/css/*.css').pipe(gulpcss()).pipe(gulp.dest('two/lib/bootstrap/css'))
})
//同时执行多个文件
gulp.task('default',['myimg','myhtml','myjs','mycss','libjs','libcss'],function(){
	console.log('执行完毕');
})
