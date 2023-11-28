import type { App } from 'vue';
import _IconAddMode from './icon-add-mode.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddMode.name = getComponentsPrefix() + _IconAddMode.name;

const IconAddMode = Object.assign(_IconAddMode, {
  install: (app: App) => {
    app.component(_IconAddMode.name, _IconAddMode);
  }
});

export default IconAddMode;