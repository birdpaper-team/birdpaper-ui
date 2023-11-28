import type { App } from 'vue';
import _IconFruiter from './icon-fruiter.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFruiter.name = getComponentsPrefix() + _IconFruiter.name;

const IconFruiter = Object.assign(_IconFruiter, {
  install: (app: App) => {
    app.component(_IconFruiter.name, _IconFruiter);
  }
});

export default IconFruiter;