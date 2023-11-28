import type { App } from 'vue';
import _IconEeg from './icon-eeg.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEeg.name = getComponentsPrefix() + _IconEeg.name;

const IconEeg = Object.assign(_IconEeg, {
  install: (app: App) => {
    app.component(_IconEeg.name, _IconEeg);
  }
});

export default IconEeg;