const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

// Зависимости Gulp будут здесь

gulp.task('default', function() {

	// запуск eslint
	
	gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());

	// исходный код для Node
	
	gulp.src("es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));

	// исходный код для браузера
	
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
	// Задачи Gulp будут здесь

});
