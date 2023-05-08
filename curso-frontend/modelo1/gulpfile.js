const gulp = require('gulp')
const concat = require('gulp-concat')
const minifyCSS = require('gulp-minify-css')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const browserSync = require ('browser-sync').create()
const reload = browserSync.reload

gulp.task ('minifyCSS', function(){
    return gulp.src('src/css/*.css')
        .pipe(concat('all.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
});

gulp.task ('minifyhtml', function(){
    console.log('iniciando processo de minificação')
    return gulp.src('src/*.html')
    .pipe(concat('all.min.html'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
    .on('end', function(){
        console.log('Processo concluído')
    });
})

gulp.task('minifyJS', function(){
    return gulp.src('src/js/*.js')
    .pipe(babel({
        comments: false,
        presets: ['@babel/env']
    }))
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
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

const process = gulp.series('minifyCSS', 'minifyhtml', 'minifyJS');