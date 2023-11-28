import type { App } from 'vue';
import _IconPhotograph from './icon-photograph.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhotograph.name = getComponentsPrefix() + _IconPhotograph.name;

const IconPhotograph = Object.assign(_IconPhotograph, {
  install: (app: App) => {
    app.component(_IconPhotograph.name, _IconPhotograph);
  }
});

export default IconPhotograph;