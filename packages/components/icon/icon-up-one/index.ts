import type { App } from 'vue';
import _IconUpOne from './icon-up-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUpOne.name = getComponentsPrefix() + _IconUpOne.name;

const IconUpOne = Object.assign(_IconUpOne, {
  install: (app: App) => {
    app.component(_IconUpOne.name, _IconUpOne);
  }
});

export default IconUpOne;