import type { App } from 'vue';
import _IconEyes from './icon-eyes.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEyes.name = getComponentsPrefix() + _IconEyes.name;

const IconEyes = Object.assign(_IconEyes, {
  install: (app: App) => {
    app.component(_IconEyes.name, _IconEyes);
  }
});

export default IconEyes;