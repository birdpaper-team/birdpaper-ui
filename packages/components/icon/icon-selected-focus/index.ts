import type { App } from 'vue';
import _IconSelectedFocus from './icon-selected-focus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSelectedFocus.name = getComponentsPrefix() + _IconSelectedFocus.name;

const IconSelectedFocus = Object.assign(_IconSelectedFocus, {
  install: (app: App) => {
    app.component(_IconSelectedFocus.name, _IconSelectedFocus);
  }
});

export default IconSelectedFocus;