var less = require("gulp-less");
var path = require("path");
var gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const cssmin = require("gulp-cssmin");

// 配置打包信息
function gulpStyleDist() {
  gulp.task("less", function () {
    return gulp
      .src("../style/index.less")
      .pipe(sourcemaps.init())
      .pipe(less({ paths: [path.join(__dirname, "less", "includes")] }))
      .pipe(concat("index.css"))
      .pipe(less())
      .pipe(cssmin())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("../../dist/"));
  });

  gulp.task("default", gulp.series(["less"]));
}

gulpStyleDist();
