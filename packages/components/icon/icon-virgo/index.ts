import type { App } from 'vue';
import _IconVirgo from './icon-virgo.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVirgo.name = getComponentsPrefix() + _IconVirgo.name;

const IconVirgo = Object.assign(_IconVirgo, {
  install: (app: App) => {
    app.component(_IconVirgo.name, _IconVirgo);
  }
});

export default IconVirgo;