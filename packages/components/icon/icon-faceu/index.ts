import type { App } from 'vue';
import _IconFaceu from './icon-faceu.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFaceu.name = getComponentsPrefix() + _IconFaceu.name;

const IconFaceu = Object.assign(_IconFaceu, {
  install: (app: App) => {
    app.component(_IconFaceu.name, _IconFaceu);
  }
});

export default IconFaceu;