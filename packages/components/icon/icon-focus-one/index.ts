import type { App } from 'vue';
import _IconFocusOne from './icon-focus-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFocusOne.name = getComponentsPrefix() + _IconFocusOne.name;

const IconFocusOne = Object.assign(_IconFocusOne, {
  install: (app: App) => {
    app.component(_IconFocusOne.name, _IconFocusOne);
  }
});

export default IconFocusOne;