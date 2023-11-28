import type { App } from 'vue';
import _IconBlockFive from './icon-block-five.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlockFive.name = getComponentsPrefix() + _IconBlockFive.name;

const IconBlockFive = Object.assign(_IconBlockFive, {
  install: (app: App) => {
    app.component(_IconBlockFive.name, _IconBlockFive);
  }
});

export default IconBlockFive;