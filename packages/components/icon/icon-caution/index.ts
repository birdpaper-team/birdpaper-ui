import type { App } from 'vue';
import _IconCaution from './icon-caution.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCaution.name = getComponentsPrefix() + _IconCaution.name;

const IconCaution = Object.assign(_IconCaution, {
  install: (app: App) => {
    app.component(_IconCaution.name, _IconCaution);
  }
});

export default IconCaution;