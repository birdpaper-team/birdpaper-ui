import type { App } from 'vue';
import _IconTheme from './icon-theme.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTheme.name = getComponentsPrefix() + _IconTheme.name;

const IconTheme = Object.assign(_IconTheme, {
  install: (app: App) => {
    app.component(_IconTheme.name, _IconTheme);
  }
});

export default IconTheme;