import type { App } from 'vue';
import _IconCornerLeftUp from './icon-corner-left-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCornerLeftUp.name = getComponentsPrefix() + _IconCornerLeftUp.name;

const IconCornerLeftUp = Object.assign(_IconCornerLeftUp, {
  install: (app: App) => {
    app.component(_IconCornerLeftUp.name, _IconCornerLeftUp);
  }
});

export default IconCornerLeftUp;