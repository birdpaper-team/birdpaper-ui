import type { App } from 'vue';
import _IconFlipVertically from './icon-flip-vertically.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFlipVertically.name = getComponentsPrefix() + _IconFlipVertically.name;

const IconFlipVertically = Object.assign(_IconFlipVertically, {
  install: (app: App) => {
    app.component(_IconFlipVertically.name, _IconFlipVertically);
  }
});

export default IconFlipVertically;