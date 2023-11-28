import type { App } from 'vue';
import _IconOpenOne from './icon-open-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOpenOne.name = getComponentsPrefix() + _IconOpenOne.name;

const IconOpenOne = Object.assign(_IconOpenOne, {
  install: (app: App) => {
    app.component(_IconOpenOne.name, _IconOpenOne);
  }
});

export default IconOpenOne;