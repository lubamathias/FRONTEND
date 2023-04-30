const gulp = require('gulp')
const concat = require('gulp-concat')
const minifyCSS = require('gulp-minify-css')
const htmlmin = require('gulp-htmlmin')

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

