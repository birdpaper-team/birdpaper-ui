import type { App } from 'vue';
import _IconQiyehao from './icon-qiyehao.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconQiyehao.name = getComponentsPrefix() + _IconQiyehao.name;

const IconQiyehao = Object.assign(_IconQiyehao, {
  install: (app: App) => {
    app.component(_IconQiyehao.name, _IconQiyehao);
  }
});

export default IconQiyehao;