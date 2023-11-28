import type { App } from 'vue';
import _IconBib from './icon-bib.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBib.name = getComponentsPrefix() + _IconBib.name;

const IconBib = Object.assign(_IconBib, {
  install: (app: App) => {
    app.component(_IconBib.name, _IconBib);
  }
});

export default IconBib;