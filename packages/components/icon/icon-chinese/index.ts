import type { App } from 'vue';
import _IconChinese from './icon-chinese.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChinese.name = getComponentsPrefix() + _IconChinese.name;

const IconChinese = Object.assign(_IconChinese, {
  install: (app: App) => {
    app.component(_IconChinese.name, _IconChinese);
  }
});

export default IconChinese;