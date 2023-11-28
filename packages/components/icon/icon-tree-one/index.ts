import type { App } from 'vue';
import _IconTreeOne from './icon-tree-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTreeOne.name = getComponentsPrefix() + _IconTreeOne.name;

const IconTreeOne = Object.assign(_IconTreeOne, {
  install: (app: App) => {
    app.component(_IconTreeOne.name, _IconTreeOne);
  }
});

export default IconTreeOne;