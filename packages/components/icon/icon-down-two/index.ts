import type { App } from 'vue';
import _IconDownTwo from './icon-down-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDownTwo.name = getComponentsPrefix() + _IconDownTwo.name;

const IconDownTwo = Object.assign(_IconDownTwo, {
  install: (app: App) => {
    app.component(_IconDownTwo.name, _IconDownTwo);
  }
});

export default IconDownTwo;