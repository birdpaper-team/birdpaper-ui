import type { App } from 'vue';
import _IconFileTxt from './icon-file-txt.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileTxt.name = getComponentsPrefix() + _IconFileTxt.name;

const IconFileTxt = Object.assign(_IconFileTxt, {
  install: (app: App) => {
    app.component(_IconFileTxt.name, _IconFileTxt);
  }
});

export default IconFileTxt;