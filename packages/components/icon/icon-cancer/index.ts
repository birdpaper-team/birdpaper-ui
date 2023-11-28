import type { App } from 'vue';
import _IconCancer from './icon-cancer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCancer.name = getComponentsPrefix() + _IconCancer.name;

const IconCancer = Object.assign(_IconCancer, {
  install: (app: App) => {
    app.component(_IconCancer.name, _IconCancer);
  }
});

export default IconCancer;