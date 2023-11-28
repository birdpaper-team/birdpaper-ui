import type { App } from 'vue';
import _IconEyebrow from './icon-eyebrow.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEyebrow.name = getComponentsPrefix() + _IconEyebrow.name;

const IconEyebrow = Object.assign(_IconEyebrow, {
  install: (app: App) => {
    app.component(_IconEyebrow.name, _IconEyebrow);
  }
});

export default IconEyebrow;