import type { App } from 'vue';
import _IconEditMovie from './icon-edit-movie.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEditMovie.name = getComponentsPrefix() + _IconEditMovie.name;

const IconEditMovie = Object.assign(_IconEditMovie, {
  install: (app: App) => {
    app.component(_IconEditMovie.name, _IconEditMovie);
  }
});

export default IconEditMovie;