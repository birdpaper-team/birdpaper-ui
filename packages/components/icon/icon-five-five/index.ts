import type { App } from 'vue';
import _IconFiveFive from './icon-five-five.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFiveFive.name = getComponentsPrefix() + _IconFiveFive.name;

const IconFiveFive = Object.assign(_IconFiveFive, {
  install: (app: App) => {
    app.component(_IconFiveFive.name, _IconFiveFive);
  }
});

export default IconFiveFive;