import gulpSass from "gulp-sass";
import gulp from "gulp";
import dartSass from "sass";
import { distRoot, themeRoot } from "../paths";

export async function buildTheme() {
  const sass = gulpSass(dartSass);

  return await gulp
    .src(`${themeRoot}/**/*.scss`)
    .pipe(sass.sync())
    .pipe(gulp.dest(`${distRoot}/theme`));
}
