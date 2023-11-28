import type { App } from 'vue';
import _IconFileFocusOne from './icon-file-focus-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileFocusOne.name = getComponentsPrefix() + _IconFileFocusOne.name;

const IconFileFocusOne = Object.assign(_IconFileFocusOne, {
  install: (app: App) => {
    app.component(_IconFileFocusOne.name, _IconFileFocusOne);
  }
});

export default IconFileFocusOne;