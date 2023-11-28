import type { App } from 'vue';
import _IconErase from './icon-erase.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconErase.name = getComponentsPrefix() + _IconErase.name;

const IconErase = Object.assign(_IconErase, {
  install: (app: App) => {
    app.component(_IconErase.name, _IconErase);
  }
});

export default IconErase;