import type { App } from 'vue';
import _IconPangle from './icon-pangle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPangle.name = getComponentsPrefix() + _IconPangle.name;

const IconPangle = Object.assign(_IconPangle, {
  install: (app: App) => {
    app.component(_IconPangle.name, _IconPangle);
  }
});

export default IconPangle;