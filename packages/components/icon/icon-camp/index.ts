import type { App } from 'vue';
import _IconCamp from './icon-camp.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCamp.name = getComponentsPrefix() + _IconCamp.name;

const IconCamp = Object.assign(_IconCamp, {
  install: (app: App) => {
    app.component(_IconCamp.name, _IconCamp);
  }
});

export default IconCamp;