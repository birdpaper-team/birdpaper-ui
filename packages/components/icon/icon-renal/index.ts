import type { App } from 'vue';
import _IconRenal from './icon-renal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRenal.name = getComponentsPrefix() + _IconRenal.name;

const IconRenal = Object.assign(_IconRenal, {
  install: (app: App) => {
    app.component(_IconRenal.name, _IconRenal);
  }
});

export default IconRenal;