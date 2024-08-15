import { resolve } from "path";

export const projRoot = resolve(__dirname, "..", "..", "..");
export const pkgRoot = resolve(projRoot, "packages");
export const compRoot = resolve(pkgRoot, "components");
export const bpUIRoot = resolve(pkgRoot, "birdpaper-ui");

export const distRoot = resolve(projRoot, "dist");
