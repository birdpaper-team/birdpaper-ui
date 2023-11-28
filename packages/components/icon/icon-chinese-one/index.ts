import type { App } from 'vue';
import _IconChineseOne from './icon-chinese-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChineseOne.name = getComponentsPrefix() + _IconChineseOne.name;

const IconChineseOne = Object.assign(_IconChineseOne, {
  install: (app: App) => {
    app.component(_IconChineseOne.name, _IconChineseOne);
  }
});

export default IconChineseOne;