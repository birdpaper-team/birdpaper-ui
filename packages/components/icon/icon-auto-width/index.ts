import type { App } from 'vue';
import _IconAutoWidth from './icon-auto-width.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAutoWidth.name = getComponentsPrefix() + _IconAutoWidth.name;

const IconAutoWidth = Object.assign(_IconAutoWidth, {
  install: (app: App) => {
    app.component(_IconAutoWidth.name, _IconAutoWidth);
  }
});

export default IconAutoWidth;