import type { App } from 'vue';
import _IconFileTips from './icon-file-tips.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileTips.name = getComponentsPrefix() + _IconFileTips.name;

const IconFileTips = Object.assign(_IconFileTips, {
  install: (app: App) => {
    app.component(_IconFileTips.name, _IconFileTips);
  }
});

export default IconFileTips;