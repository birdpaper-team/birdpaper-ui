import type { App } from 'vue';
import _IconMicroscopeOne from './icon-microscope-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMicroscopeOne.name = getComponentsPrefix() + _IconMicroscopeOne.name;

const IconMicroscopeOne = Object.assign(_IconMicroscopeOne, {
  install: (app: App) => {
    app.component(_IconMicroscopeOne.name, _IconMicroscopeOne);
  }
});

export default IconMicroscopeOne;