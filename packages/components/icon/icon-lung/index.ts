import type { App } from 'vue';
import _IconLung from './icon-lung.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLung.name = getComponentsPrefix() + _IconLung.name;

const IconLung = Object.assign(_IconLung, {
  install: (app: App) => {
    app.component(_IconLung.name, _IconLung);
  }
});

export default IconLung;