import type { App } from 'vue';
import _IconKungfu from './icon-kungfu.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconKungfu.name = getComponentsPrefix() + _IconKungfu.name;

const IconKungfu = Object.assign(_IconKungfu, {
  install: (app: App) => {
    app.component(_IconKungfu.name, _IconKungfu);
  }
});

export default IconKungfu;