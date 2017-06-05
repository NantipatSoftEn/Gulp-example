#  [Gulp](http://gulpjs.com/)
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
```javascript
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
```javascript
var gulp = require('gulp');

gulp.task('sayHello', function() {
	console.log('Hello Worldsdsd');
});
```
## Watch the Tasks
Automated  can watching  when chang/edit file
```javascript
gulp.task('watch', function() {
    gulp.watch('main.css', ['css']);
    gulp.watch('main.js', ['js']);
});
```
## Default Task
mutitasking
```javascript
gulp.task('default', ['watch']);
gulp.task('all', ['css', 'js', 'watch']);
```

## [purifycss](https://github.com/purifycss/purifycss)
clean Unnecessary CSS

##install
```bash
npm install -g purify-css
```
##used
```bash
purifycss ./bootstrap.min.css index.html -o index.css
```
## or make Minify
```bash
purifycss ./bootstrap.min.css index.html -o index.css -m
```

### Potential reduction

* [Bootstrap](https://github.com/twbs/bootstrap) file: ~140k
* App using ~40% of selectors.
* Minified: ~117k
* Purified + Minified: **~35k**

## Reference
Link :: https://devahoy.com/posts/getting-started-with-gulp/
Link ::  https://www.babelcoder.com/blog/posts/purify-css
