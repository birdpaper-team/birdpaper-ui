import type { App } from 'vue';
import _IconFacePowder from './icon-face-powder.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFacePowder.name = getComponentsPrefix() + _IconFacePowder.name;

const IconFacePowder = Object.assign(_IconFacePowder, {
  install: (app: App) => {
    app.component(_IconFacePowder.name, _IconFacePowder);
  }
});

export default IconFacePowder;