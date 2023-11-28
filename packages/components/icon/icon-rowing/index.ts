import type { App } from 'vue';
import _IconRowing from './icon-rowing.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRowing.name = getComponentsPrefix() + _IconRowing.name;

const IconRowing = Object.assign(_IconRowing, {
  install: (app: App) => {
    app.component(_IconRowing.name, _IconRowing);
  }
});

export default IconRowing;