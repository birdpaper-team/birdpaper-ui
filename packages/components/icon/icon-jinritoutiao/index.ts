import type { App } from 'vue';
import _IconJinritoutiao from './icon-jinritoutiao.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconJinritoutiao.name = getComponentsPrefix() + _IconJinritoutiao.name;

const IconJinritoutiao = Object.assign(_IconJinritoutiao, {
  install: (app: App) => {
    app.component(_IconJinritoutiao.name, _IconJinritoutiao);
  }
});

export default IconJinritoutiao;