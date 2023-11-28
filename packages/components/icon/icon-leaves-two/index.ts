import type { App } from 'vue';
import _IconLeavesTwo from './icon-leaves-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeavesTwo.name = getComponentsPrefix() + _IconLeavesTwo.name;

const IconLeavesTwo = Object.assign(_IconLeavesTwo, {
  install: (app: App) => {
    app.component(_IconLeavesTwo.name, _IconLeavesTwo);
  }
});

export default IconLeavesTwo;