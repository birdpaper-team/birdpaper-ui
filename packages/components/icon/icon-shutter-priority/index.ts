import type { App } from 'vue';
import _IconShutterPriority from './icon-shutter-priority.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShutterPriority.name = getComponentsPrefix() + _IconShutterPriority.name;

const IconShutterPriority = Object.assign(_IconShutterPriority, {
  install: (app: App) => {
    app.component(_IconShutterPriority.name, _IconShutterPriority);
  }
});

export default IconShutterPriority;