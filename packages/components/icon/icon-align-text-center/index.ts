import type { App } from 'vue';
import _IconAlignTextCenter from './icon-align-text-center.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTextCenter.name = getComponentsPrefix() + _IconAlignTextCenter.name;

const IconAlignTextCenter = Object.assign(_IconAlignTextCenter, {
  install: (app: App) => {
    app.component(_IconAlignTextCenter.name, _IconAlignTextCenter);
  }
});

export default IconAlignTextCenter;