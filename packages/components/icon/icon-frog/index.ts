import type { App } from 'vue';
import _IconFrog from './icon-frog.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFrog.name = getComponentsPrefix() + _IconFrog.name;

const IconFrog = Object.assign(_IconFrog, {
  install: (app: App) => {
    app.component(_IconFrog.name, _IconFrog);
  }
});

export default IconFrog;