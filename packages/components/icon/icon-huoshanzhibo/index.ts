import type { App } from 'vue';
import _IconHuoshanzhibo from './icon-huoshanzhibo.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHuoshanzhibo.name = getComponentsPrefix() + _IconHuoshanzhibo.name;

const IconHuoshanzhibo = Object.assign(_IconHuoshanzhibo, {
  install: (app: App) => {
    app.component(_IconHuoshanzhibo.name, _IconHuoshanzhibo);
  }
});

export default IconHuoshanzhibo;