import type { App } from 'vue';
import _IconPress from './icon-press.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPress.name = getComponentsPrefix() + _IconPress.name;

const IconPress = Object.assign(_IconPress, {
  install: (app: App) => {
    app.component(_IconPress.name, _IconPress);
  }
});

export default IconPress;