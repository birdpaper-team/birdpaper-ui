import type { App } from 'vue';
import _IconAdobeIllustrate from './icon-adobe-illustrate.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAdobeIllustrate.name = getComponentsPrefix() + _IconAdobeIllustrate.name;

const IconAdobeIllustrate = Object.assign(_IconAdobeIllustrate, {
  install: (app: App) => {
    app.component(_IconAdobeIllustrate.name, _IconAdobeIllustrate);
  }
});

export default IconAdobeIllustrate;