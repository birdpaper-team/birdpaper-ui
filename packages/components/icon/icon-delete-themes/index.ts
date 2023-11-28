import type { App } from 'vue';
import _IconDeleteThemes from './icon-delete-themes.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeleteThemes.name = getComponentsPrefix() + _IconDeleteThemes.name;

const IconDeleteThemes = Object.assign(_IconDeleteThemes, {
  install: (app: App) => {
    app.component(_IconDeleteThemes.name, _IconDeleteThemes);
  }
});

export default IconDeleteThemes;