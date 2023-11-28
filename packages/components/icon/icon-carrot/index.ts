import type { App } from 'vue';
import _IconCarrot from './icon-carrot.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCarrot.name = getComponentsPrefix() + _IconCarrot.name;

const IconCarrot = Object.assign(_IconCarrot, {
  install: (app: App) => {
    app.component(_IconCarrot.name, _IconCarrot);
  }
});

export default IconCarrot;