import type { App } from 'vue';
import _IconTextarea from './icon-textarea.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTextarea.name = getComponentsPrefix() + _IconTextarea.name;

const IconTextarea = Object.assign(_IconTextarea, {
  install: (app: App) => {
    app.component(_IconTextarea.name, _IconTextarea);
  }
});

export default IconTextarea;