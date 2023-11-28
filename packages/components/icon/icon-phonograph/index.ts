import type { App } from 'vue';
import _IconPhonograph from './icon-phonograph.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhonograph.name = getComponentsPrefix() + _IconPhonograph.name;

const IconPhonograph = Object.assign(_IconPhonograph, {
  install: (app: App) => {
    app.component(_IconPhonograph.name, _IconPhonograph);
  }
});

export default IconPhonograph;