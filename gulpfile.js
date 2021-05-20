const {src, dest, watch, parallel, series} = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const svgSprite  = require('gulp-svg-sprite');

function delBuild() {
  return del('build')
}

function images() {
  return src('app/images/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(dest('build/images'))
}

function styles() {
  return src('app/scss/styles.scss')
    .pipe(scss({outputStyle: "compressed"}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 5 version']
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/main.js', 'app/js/slider.js','app/js/projectSlider.js'], scripts);
  watch(['app/*.html']).on('change',browserSync.reload);
}

function browsersync() {
  browserSync.init(
    {
      server: {
        baseDir: 'app/'
      }
    }
  );
}

function scripts() {
  return src(['app/js/slider.js','app/js/projectSlider.js','app/js/main.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function sprite() {
  return src('app/icons/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg"  //sprite file name
        }
      }
    }))
    .pipe(dest( 'app/icons' ))
}

function build() {
  return src(['app/css/style.min.css', 'app/fonts/**/*', 'app/js/main.min.js', 'app/*html', 'app/icons/sprite.svg'], {base: 'app'})
    .pipe(dest('build'))
}

exports.sprite = sprite;
exports.styles = styles;
exports.watching = watching;
exports.browserSync = browserSync;
exports.scripts = scripts;
exports.delBuild = delBuild;
exports.images = images;
exports.default = parallel(styles, browsersync, watching, scripts);
exports.build = series(delBuild, images, build);
