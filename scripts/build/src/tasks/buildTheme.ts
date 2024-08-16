import gulpSass from "gulp-sass";
import gulp from "gulp";
import dartSass from "sass";
import { distRoot, themeRoot } from "../paths";

export async function buildTheme() {
  const sass = gulpSass(dartSass);
  const outDir = `${distRoot}/birdpaper-ui/theme`;

  return await gulp
    .src(`${themeRoot}/**/*.scss`)
    .pipe(sass.sync())
    .pipe(gulp.dest(outDir));

  // return await gulp
  //   .src([`${outDir}/src/index.css`])
  //   .pipe(gulp.dest(`${distRoot}/birdpaper-ui/dist/`));
}
