import type { App } from 'vue';
import _IconTailoring from './icon-tailoring.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTailoring.name = getComponentsPrefix() + _IconTailoring.name;

const IconTailoring = Object.assign(_IconTailoring, {
  install: (app: App) => {
    app.component(_IconTailoring.name, _IconTailoring);
  }
});

export default IconTailoring;