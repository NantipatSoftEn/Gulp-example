# Gulp
Automated minify css
## install  Global  Gulp
```
npm install gulp -g
```

## install  Local  Gulpat My Project  
```
npm install gulp --save-dev
```

## Code
```
var gulp = require('gulp');

gulp.task('sayHello', function() {
	console.log('Hello Worldsdsd');
});
```

## Run  Gulp
```
gulp  NameTask
```
## Code
```
var gulp = require('gulp');

gulp.task('sayHello', function() {
	console.log('Hello Worldsdsd');
});
```
## Watch the Tasks
Automated  can watching  when chang/edit file
```
gulp.task('watch', function() {
    gulp.watch('main.css', ['css']);
    gulp.watch('main.js', ['js']);
});
```
## Default Task
mutitasking
```
gulp.task('default', ['watch']);
gulp.task('all', ['css', 'js', 'watch']);
```

#purifly css
clean Unnecessary CSS

##install
```
npm install -g purify-css
```
##used
```
purifycss ./bootstrap.min.css index.html -o index.css
```
## or make Minify
```
purifycss ./bootstrap.min.css index.html -o index.css -m
```



## Reference
Link :: https://devahoy.com/posts/getting-started-with-gulp/
Link ::  https://www.babelcoder.com/blog/posts/purify-css
