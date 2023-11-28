import type { App } from 'vue';
import _IconGongfu from './icon-gongfu.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGongfu.name = getComponentsPrefix() + _IconGongfu.name;

const IconGongfu = Object.assign(_IconGongfu, {
  install: (app: App) => {
    app.component(_IconGongfu.name, _IconGongfu);
  }
});

export default IconGongfu;