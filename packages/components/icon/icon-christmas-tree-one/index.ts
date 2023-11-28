import type { App } from 'vue';
import _IconChristmasTreeOne from './icon-christmas-tree-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChristmasTreeOne.name = getComponentsPrefix() + _IconChristmasTreeOne.name;

const IconChristmasTreeOne = Object.assign(_IconChristmasTreeOne, {
  install: (app: App) => {
    app.component(_IconChristmasTreeOne.name, _IconChristmasTreeOne);
  }
});

export default IconChristmasTreeOne;