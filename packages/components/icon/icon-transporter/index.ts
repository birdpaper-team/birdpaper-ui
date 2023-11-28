import type { App } from 'vue';
import _IconTransporter from './icon-transporter.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTransporter.name = getComponentsPrefix() + _IconTransporter.name;

const IconTransporter = Object.assign(_IconTransporter, {
  install: (app: App) => {
    app.component(_IconTransporter.name, _IconTransporter);
  }
});

export default IconTransporter;