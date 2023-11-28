import type { App } from 'vue';
import _IconAdobeIndesign from './icon-adobe-indesign.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAdobeIndesign.name = getComponentsPrefix() + _IconAdobeIndesign.name;

const IconAdobeIndesign = Object.assign(_IconAdobeIndesign, {
  install: (app: App) => {
    app.component(_IconAdobeIndesign.name, _IconAdobeIndesign);
  }
});

export default IconAdobeIndesign;