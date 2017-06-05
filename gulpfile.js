var gulp = require('gulp');

gulp.task('sayHello', function() {
  console.log('Hello Worldsdsd');
});


//   CSS
var gulp = require('gulp');

// Import gulp-minify-css เพื่อใช้งาน
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
gulp.task('css' ,function() {
    return gulp
        .src('main.css')    // ไฟล์ที่ต้องการ minify
        .pipe(minifyCSS())  // สั่ง execute minifyCSS
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets')); // dest : คือโฟลเดอร์ที่ต้องการเซฟ
});

//  gulp-uglify

var uglify = require('gulp-uglify');

gulp.task('js', function() {
    return gulp
        .src('main.js')         // ไฟล์ที่ต้องการ uglify()
        .pipe(uglify())         // สั่ง execute uglify()
        .pipe(rename({ suffix: '.min' }))   // เพิ่ม .min ต่อท้ายไฟล์
        .pipe(gulp.dest('assets'));     // โฟลเดอร์ที่ต้องการเซฟ
});

gulp.task('watch', function() {
    gulp.watch('main.css', ['css']);
    gulp.watch('main.js', ['js']);
});
gulp.task('default', ['watch']);
gulp.task('all', ['css', 'js', 'watch']);