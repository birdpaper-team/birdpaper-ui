import type { App } from 'vue';
import _IconTextUnderline from './icon-text-underline.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTextUnderline.name = getComponentsPrefix() + _IconTextUnderline.name;

const IconTextUnderline = Object.assign(_IconTextUnderline, {
  install: (app: App) => {
    app.component(_IconTextUnderline.name, _IconTextUnderline);
  }
});

export default IconTextUnderline;