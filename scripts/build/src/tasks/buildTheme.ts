import gulpSass from "gulp-sass";
import gulp from "gulp";
import dartSass from "sass";
import { distPkgRoot, themeRoot } from "../paths";
import { join } from "path";

export async function buildTheme() {
  const sass = gulpSass(dartSass);
  const outDir = join(distPkgRoot, "theme");

  return await gulp
    .src(`${themeRoot}/**/*.scss`)
    .pipe(sass.sync())
    .pipe(gulp.dest(outDir));
}
