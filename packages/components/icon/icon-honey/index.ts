import type { App } from 'vue';
import _IconHoney from './icon-honey.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHoney.name = getComponentsPrefix() + _IconHoney.name;

const IconHoney = Object.assign(_IconHoney, {
  install: (app: App) => {
    app.component(_IconHoney.name, _IconHoney);
  }
});

export default IconHoney;