const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify')

gulp.task('minify-css', function(){
    return gulp.src('src/css/*.css')    
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('minify-js', function(){
    return gulp.src('src/js/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('minify-slick',function(){
    console.log('Iniciando minificação de slick')
    return gulp.src('vendor/slick/slick/slick/*.css')
    .pipe(concat('slick.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    .on('end', function(){
        console.log('Processo concluído');
    })
});

gulp.task('minify-bootstrap', function(){
    return gulp.src('node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(concat('bootstrap.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    .on('end',function(){
        console.log('Processo concluído')
    });
});

gulp.task('minify-bootstrapJS',function(){
    return gulp.src('vendor/Bootstrap/bootstrap-5.3.0-alpha1-dist/js/bootstrap.min.js')
    .pipe(concat('bootstrapJS.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});