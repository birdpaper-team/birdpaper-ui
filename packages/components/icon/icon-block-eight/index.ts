import type { App } from 'vue';
import _IconBlockEight from './icon-block-eight.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlockEight.name = getComponentsPrefix() + _IconBlockEight.name;

const IconBlockEight = Object.assign(_IconBlockEight, {
  install: (app: App) => {
    app.component(_IconBlockEight.name, _IconBlockEight);
  }
});

export default IconBlockEight;