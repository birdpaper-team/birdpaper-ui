import type { App } from 'vue';
import _IconLeavesOne from './icon-leaves-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeavesOne.name = getComponentsPrefix() + _IconLeavesOne.name;

const IconLeavesOne = Object.assign(_IconLeavesOne, {
  install: (app: App) => {
    app.component(_IconLeavesOne.name, _IconLeavesOne);
  }
});

export default IconLeavesOne;