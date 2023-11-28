import type { App } from 'vue';
import _IconBachelorCap from './icon-bachelor-cap.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBachelorCap.name = getComponentsPrefix() + _IconBachelorCap.name;

const IconBachelorCap = Object.assign(_IconBachelorCap, {
  install: (app: App) => {
    app.component(_IconBachelorCap.name, _IconBachelorCap);
  }
});

export default IconBachelorCap;