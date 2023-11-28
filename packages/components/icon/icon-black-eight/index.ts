import type { App } from 'vue';
import _IconBlackEight from './icon-black-eight.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlackEight.name = getComponentsPrefix() + _IconBlackEight.name;

const IconBlackEight = Object.assign(_IconBlackEight, {
  install: (app: App) => {
    app.component(_IconBlackEight.name, _IconBlackEight);
  }
});

export default IconBlackEight;