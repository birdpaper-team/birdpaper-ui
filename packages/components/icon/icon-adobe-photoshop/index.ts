import type { App } from 'vue';
import _IconAdobePhotoshop from './icon-adobe-photoshop.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAdobePhotoshop.name = getComponentsPrefix() + _IconAdobePhotoshop.name;

const IconAdobePhotoshop = Object.assign(_IconAdobePhotoshop, {
  install: (app: App) => {
    app.component(_IconAdobePhotoshop.name, _IconAdobePhotoshop);
  }
});

export default IconAdobePhotoshop;