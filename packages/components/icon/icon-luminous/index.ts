import type { App } from 'vue';
import _IconLuminous from './icon-luminous.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLuminous.name = getComponentsPrefix() + _IconLuminous.name;

const IconLuminous = Object.assign(_IconLuminous, {
  install: (app: App) => {
    app.component(_IconLuminous.name, _IconLuminous);
  }
});

export default IconLuminous;