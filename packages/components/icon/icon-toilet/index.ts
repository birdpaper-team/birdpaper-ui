import type { App } from 'vue';
import _IconToilet from './icon-toilet.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconToilet.name = getComponentsPrefix() + _IconToilet.name;

const IconToilet = Object.assign(_IconToilet, {
  install: (app: App) => {
    app.component(_IconToilet.name, _IconToilet);
  }
});

export default IconToilet;