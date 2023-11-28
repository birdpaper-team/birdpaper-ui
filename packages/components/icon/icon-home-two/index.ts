import type { App } from 'vue';
import _IconHomeTwo from './icon-home-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHomeTwo.name = getComponentsPrefix() + _IconHomeTwo.name;

const IconHomeTwo = Object.assign(_IconHomeTwo, {
  install: (app: App) => {
    app.component(_IconHomeTwo.name, _IconHomeTwo);
  }
});

export default IconHomeTwo;