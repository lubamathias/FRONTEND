const gulp = require('gulp')
const concat = require('gulp-concat')
const minifyCSS = require('gulp-minify-css')
const minifyhtml = require('gulp-htmlmin')
const browserSync = require ('browser-sync').create()
const reload = browserSync.reload

gulp.task ('minifyhtml', function(){
    console.log('iniciando processo de minificação')
    return gulp.src('src/*.html')
    .pipe(concat('minify.html'))
    .pipe(minifyhtml({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
    .on('end', function(){
        console.log('Processo Concluído')
    });
});

gulp.task ('minifyCSS', function(){
    return gulp.src('src/css/*.css')
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'))
});

gulp.task ('minifybootstrap', function(){
    return gulp.src('node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe (concat('bootstrap.min.css'))
    .pipe (minifyCSS())
    .pipe (gulp.dest('dist/css'))
});

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./dist/**/*').on('change', browserSync.reload);
});

const process = gulp.series('minifyCSS', 'minifyhtml', 'minifybootstrap');