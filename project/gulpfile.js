// Gulp.js configuration

var
  // modules
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  sass = require('gulp-sass');
  babel = require('gulp-babel');

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }
;

gulp.task('images', function() {
  return gulp.src(folder.src + 'images/**/*')
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(folder.build + 'images/'));
});

gulp.task('sass', function () {
  return gulp.src(folder.src + 'scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(folder.build + 'css/'));
});

gulp.task('html', function () {
  return gulp.src(folder.src + 'html/**/*.html')
    .pipe(gulp.dest(folder.build + 'html/'));
});

gulp.task('js', function () {
  return gulp.src(folder.src + 'js/**/*.js')
    .pipe(gulp.dest(folder.build + 'js/'));
});

gulp.task('babel', () =>
	gulp.src(folder.src + 'js/**/*.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest(folder.build + 'js/'))
);

gulp.task('watch', function() {

  gulp.watch(folder.src + 'images/**/*', ['images']);
  gulp.watch(folder.src + 'scss/**/*', ['sass']);
  gulp.watch(folder.src + 'html/**/*', ['html']);
  gulp.watch(folder.src + 'js/**/*', ['babel']);
  //gulp.watch(folder.src + 'js/**/*', ['js']);
});
