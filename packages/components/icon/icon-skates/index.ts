import type { App } from 'vue';
import _IconSkates from './icon-skates.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSkates.name = getComponentsPrefix() + _IconSkates.name;

const IconSkates = Object.assign(_IconSkates, {
  install: (app: App) => {
    app.component(_IconSkates.name, _IconSkates);
  }
});

export default IconSkates;