import type { App } from 'vue';
import _IconFilm from './icon-film.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFilm.name = getComponentsPrefix() + _IconFilm.name;

const IconFilm = Object.assign(_IconFilm, {
  install: (app: App) => {
    app.component(_IconFilm.name, _IconFilm);
  }
});

export default IconFilm;