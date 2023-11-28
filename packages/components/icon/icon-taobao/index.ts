import type { App } from 'vue';
import _IconTaobao from './icon-taobao.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTaobao.name = getComponentsPrefix() + _IconTaobao.name;

const IconTaobao = Object.assign(_IconTaobao, {
  install: (app: App) => {
    app.component(_IconTaobao.name, _IconTaobao);
  }
});

export default IconTaobao;